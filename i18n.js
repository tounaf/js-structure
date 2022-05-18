import { createI18n } from "vue-i18n";
import en from './locales/en.json'
import fr from './locales/fr.json'

import i18nService from "./services/i18n.service";

const i18n = createI18n({
  locale: i18nService.getActiveLanguage(), // set locale
  fallbackLocale: i18nService.fallbackLocale, // set fallback locale
  messages: {en:en, fr:fr}
})

export default i18n
