import type { ReactNode } from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// translations
import "@/features/i18n";

// global styles (fonts, tokens, base)
import "@/shared/ui/styles/styles.css";

/** Mounts a page into `#root`. Every page entry in `app/entries/` calls this. */
export function mount(page: ReactNode) {
  const container = document.getElementById("root");
  if (!container) throw new Error("Root element #root not found");

  createRoot(container).render(<StrictMode>{page}</StrictMode>);
}
