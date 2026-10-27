import { DEFAULT_LANG, LANGS, type Lang } from "@/lang";

import { useTranslation } from "./useTranslation";

/** Current language, narrowed to the supported ones. */
export const useLang = (): Lang => {
  const { i18n } = useTranslation();
  const code = i18n.language.slice(0, 2);
  return LANGS.find((l) => l === code) ?? DEFAULT_LANG;
};
