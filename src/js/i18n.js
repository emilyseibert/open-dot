import IntlMessageFormat from 'intl-messageformat';
import { messages } from './constants/i18n';
import { curry } from 'ramda';

export const getLocale = () => {
    return 'en-CA';
}

const safeIntlMessage = (strings, key, locale) => {
    try {
        return new IntlMessageFormat(strings[key], locale);
    } catch (e) {
        if (!window.isProduction) {
            window.console.warn('Unable to find i18n string for', key);
        }

        return { format: () => {return ''} };
    }
}

export const getString = (key) => {
    const locale = getLocale();
    const strings = messages[locale];

    return safeIntlMessage(strings, key, locale).format();
};

export const getPhrase = curry((key, params) => {
    const locale = getLocale();
    const strings = messages[locale];

    return safeIntlMessage(strings, key, locale).format(params);
});

export default {
    getString,
    getPhrase
}
