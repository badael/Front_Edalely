import ar from '../assets/i18n/ar.json';
import en from '../assets/i18n/en.json';
import { createI18n } from 'vue-i18n';

const i18n = createI18n({
    messages: {
        ar: ar,
        en: en,
    },
    locale: localStorage.getItem('lang') || 'en',
    silentTranslationWarn: process.env.NODE_ENV === 'production',
    fallbackLocale: 'en' // set fallback locale

});

export default i18n;
