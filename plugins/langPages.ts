import type { Plugin } from "vite";

import { DEFAULT_LANG, LANGS, dictionaries, type Lang } from "../src/lang";
import {
  PAGES,
  pageByPath,
  pageUrl,
  type PageId,
} from "../src/shared/config/pages";

/** Comment in each `pages/<id>.html` replaced by the localized `<title>` and meta tags. */
const MARKER = "<!-- lang-head -->";

type LangPagesOptions = {
  /** Public origin, without trailing slash (canonical, hreflang and sitemap URLs). */
  siteUrl: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

/** Localized `<title>`, description, social meta and hreflang links for one page in one language. */
function renderHead(lang: Lang, id: PageId, siteUrl: string) {
  const { ogLocale, pages } = dictionaries[lang].meta;
  const { title, description } = pages[id];
  const t = escapeHtml(title);
  const d = escapeHtml(description);
  const url = `${siteUrl}${pageUrl(lang, id)}`;
  const alternates = LANGS.filter((l) => l !== lang).map(
    (l) =>
      `<meta property="og:locale:alternate" content="${dictionaries[l].meta.ogLocale}" />`,
  );
  const hreflangs = LANGS.map(
    (l) =>
      `<link rel="alternate" hreflang="${l}" href="${siteUrl}${pageUrl(l, id)}" />`,
  );
  return [
    `<title>${t}</title>`,
    `<meta name="description" content="${d}" />`,
    `<meta name="twitter:title" content="${t}" />`,
    `<meta name="twitter:description" content="${d}" />`,
    `<meta property="og:title" content="${t}" />`,
    `<meta property="og:description" content="${d}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${ogLocale}" />`,
    ...alternates,
    `<link rel="canonical" href="${url}" />`,
    ...hreflangs,
    `<link rel="alternate" hreflang="x-default" href="${siteUrl}${pageUrl(DEFAULT_LANG, id)}" />`,
  ].join("\n    ");
}

/** Inline script for `/`: sends visitors to their saved or browser language before anything paints. */
function renderRedirect() {
  const langs = JSON.stringify(LANGS);
  return `<script>(function(){var L=${langs},s=null;try{s=localStorage.getItem("i18nextLng")}catch(e){}var c=[s].concat(navigator.languages||[navigator.language]);var l="${DEFAULT_LANG}";for(var i=0;i<c.length;i++){var v=(c[i]||"").slice(0,2).toLowerCase();if(L.indexOf(v)>-1){l=v;break}}location.replace("/"+l+"/"+location.search+location.hash)})()</script>`;
}

const localize = (html: string, lang: Lang, head: string) =>
  html
    .replace(/<html lang="[^"]*">/, `<html lang="${lang}">`)
    .replace(MARKER, head);

const langFromUrl = (url: string): Lang => {
  const first = url.split("?")[0]?.split("/")[1];
  return LANGS.find((l) => l === first) ?? DEFAULT_LANG;
};

const sitemap = (siteUrl: string) => {
  const urls = LANGS.flatMap((lang) =>
    PAGES.map((page) => {
      const links = LANGS.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${siteUrl}${pageUrl(l, page.id)}" />`,
      ).join("\n");
      return `  <url>\n    <loc>${siteUrl}${pageUrl(lang, page.id)}</loc>\n${links}\n  </url>`;
    }),
  );
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join("\n")}\n</urlset>\n`;
};

/**
 * Multipage build: every `pages/<id>.html` entry is emitted once per language at its public URL
 * (`/en/projects/index.html`, `/es/projects/index.html`) with translated metadata, so crawlers and
 * link previews see it without running JS. Also emits the root redirect, `sitemap.xml` and `robots.txt`.
 * Dev: `/en/projects/` is served from `pages/projects.html` with that language's metadata.
 */
export function langPages({ siteUrl }: LangPagesOptions): Plugin {
  return {
    name: "lang-pages",
    enforce: "post",
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const url = req.url ?? "/";
        const [pathname = "/", query] = url.split("?");
        if (pathname === "/") {
          res.statusCode = 302;
          res.setHeader("Location", `/${DEFAULT_LANG}/`);
          res.end();
          return;
        }
        const match = /^\/([a-z]{2})(\/.*)?$/.exec(pathname);
        const page = match && pageByPath(match[2] ?? "");
        if (match && page && LANGS.some((l) => l === match[1])) {
          req.url = `/pages/${page.id}.html${query ? `?${query}` : ""}`;
          // Remember the public URL so the head is localized in dev too.
          (req as { originalUrl?: string }).originalUrl = url;
        }
        next();
      });
    },
    transformIndexHtml: {
      order: "post",
      handler(html, ctx) {
        if (!ctx.server) return html;
        const id = /\/pages\/([a-z-]+)\.html/.exec(ctx.path)?.[1] as
          PageId | undefined;
        if (!id) return html;
        const lang = langFromUrl(ctx.originalUrl ?? "");
        return localize(html, lang, renderHead(lang, id, siteUrl));
      },
    },
    generateBundle(_, bundle) {
      for (const page of PAGES) {
        const key = `pages/${page.id}.html`;
        const entry = bundle[key];
        if (entry?.type !== "asset" || typeof entry.source !== "string") {
          this.error(`lang-pages: ${key} not found in the bundle`);
        }
        const html = entry.source;
        if (!html.includes(MARKER))
          this.error(`lang-pages: ${MARKER} missing from ${key}`);
        for (const lang of LANGS) {
          this.emitFile({
            type: "asset",
            fileName: `${pageUrl(lang, page.id).slice(1)}index.html`,
            source: localize(html, lang, renderHead(lang, page.id, siteUrl)),
          });
        }
        if (page.id === "home") {
          this.emitFile({
            type: "asset",
            fileName: "index.html",
            source: localize(
              html,
              DEFAULT_LANG,
              `${renderRedirect()}\n    ${renderHead(DEFAULT_LANG, "home", siteUrl)}`,
            ),
          });
        }
        delete bundle[key];
      }
      this.emitFile({
        type: "asset",
        fileName: "sitemap.xml",
        source: sitemap(siteUrl),
      });
      this.emitFile({
        type: "asset",
        fileName: "robots.txt",
        source: `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
      });
    },
  };
}
