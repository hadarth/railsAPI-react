import englishMessages from './utils/i18n/english';
import hebrewMessages from './utils/i18n/hebrew';

const messages = {
    he: () => import('./utils/i18n/hebrew.js').then(messages => messages.default),
};

export default locale => {
    console.log("locale")
    if (locale === 'he') {
        console.log("locale - he")
        return hebrewMessages;
    }

    // Always fallback on english
    console.log("Always fallback on english")
    return englishMessages;
};