import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

import { langPages } from "./plugins/langPages";
import { PAGES } from "./src/shared/config/pages";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const siteUrl = (env["SITE_URL"] ?? "https://dava-portfolio.web.app").replace(
    /\/$/,
    "",
  );

  return {
    plugins: [react(), tailwindcss(), langPages({ siteUrl })],
    resolve: {
      tsconfigPaths: true,
    },
    server: {
      port: 3002,
      fs: {
        strict: true,
        deny: [".env", ".env.*", "*.pem", "*.crt", "*.key", ".git/**"],
      },
    },
    build: {
      rollupOptions: {
        // One HTML entry per page; the plugin moves each to /<lang>/<path>/index.html.
        input: Object.fromEntries(
          PAGES.map((page) => [page.id, `pages/${page.id}.html`]),
        ),
        output: {
          manualChunks: (id) => {
            if (!id.includes("node_modules")) return;
            if (id.includes("/react/") || id.includes("/react-dom/")) {
              return "vendor-react";
            }
            if (id.includes("/i18next/") || id.includes("/react-i18next/")) {
              return "vendor-i18n";
            }
            return;
          },
        },
      },
    },
  };
});
