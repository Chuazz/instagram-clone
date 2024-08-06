import { KeyValueType, LanguageType, OptionType } from '@/types/common';
import { I18n } from 'i18n-js';

import enCommon from './locales/en/common.json';
import enInfo from './locales/en/info.json';
import enAuth from './locales/en/auth.json';
import enValidate from './locales/en/validate.json';
import enPost from './locales/en/post.json';

import viCommon from './locales/vi/common.json';
import viInfo from './locales/vi/info.json';
import viAuth from './locales/vi/auth.json';
import viValidate from './locales/vi/validate.json';
import viPost from './locales/vi/post.json';

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
        common: enCommon,
        info: enInfo,
        auth: enAuth,
        validate: enValidate,
        post: enPost,
    },
    vi: {
        common: viCommon,
        info: viInfo,
        auth: viAuth,
        validate: viValidate,
        post: viPost,
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
