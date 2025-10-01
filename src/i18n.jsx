import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './lan/en/translate.json'
import hi from './lan/hi/translate.json'

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hi: { translation: hi },
  },
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
})

export default i18n;
