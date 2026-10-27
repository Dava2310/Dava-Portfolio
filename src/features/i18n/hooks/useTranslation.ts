import { useTranslation as useBaseTranslation } from "react-i18next";

import { NAMESPACES } from "../constants";

/** Loads every namespace, so keys are written `t("_common:nav.about")`, `t("_pages:home.hero.title")`. */
export const useTranslation = () => useBaseTranslation([...NAMESPACES]);
