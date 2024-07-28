import { KeyValueType, LanguageType, OptionType } from '@/types';
import { I18n } from 'i18n-js';

const LANGUAGES: KeyValueType<LanguageType, OptionType<LanguageType>> = {
    vi: {
        code: 'vi',
        label: 'Việt Nam',
    },
    en: {
        code: 'en',
        label: 'English (US)',
    },
};

const SUPPORT_LANGUAGES = Object.keys(LANGUAGES).map(
    (key) => LANGUAGES[key as LanguageType],
);

const FALLBACK_LANGUAGE = LANGUAGES.en.code;

const FALLBACK_NAMESPACE = 'common';

const translations: KeyValueType<LanguageType, unknown> = {
    en: {
        common: require('./locales/en/common.json'),
        info: require('./locales/en/info.json'),
        post: require('./locales/en/post.json'),
        auth: require('./locales/en/auth.json'),
    },
    vi: {
        common: require('./locales/vi/common.json'),
        info: require('./locales/vi/info.json'),
        post: require('./locales/vi/post.json'),
        auth: require('./locales/vi/auth.json'),
    },
};

const i18n = new I18n(translations);

export {
    FALLBACK_LANGUAGE,
    FALLBACK_NAMESPACE,
    i18n,
    LANGUAGES,
    SUPPORT_LANGUAGES,
};
