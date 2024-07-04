import { KeyValueType, LanguageType, OptionType } from '@super-app/types';
import { getLocales } from 'expo-localization';
import { I18n } from 'i18n-js';

const LANGUAGES: KeyValueType<LanguageType, OptionType<LanguageType>> = {
	vi: {
		code: 'vi',
		label: 'Việt Nam',
	},
	en: {
		code: 'en',
		label: 'English',
	},
};

const SUPPORT_LANGUAGES = Object.keys(LANGUAGES).map(
	(key) => LANGUAGES[key as LanguageType].code,
);

const FALLBACK_LANGUAGE = LANGUAGES.en.code;

const FALLBACK_NAMESPACE = 'common';

const translations: KeyValueType<LanguageType, any> = {
	en: {
		common: require('./locales/en/common.json'),
		info: require('./locales/en/info.json'),
	},
	vi: {
		common: require('./locales/vi/common.json'),
		info: require('./locales/vi/info.json'),
	},
};

const i18n = new I18n(translations);

i18n.locale = getLocales()[0].languageCode ?? FALLBACK_LANGUAGE;

i18n.enableFallback = true;

export { FALLBACK_LANGUAGE, FALLBACK_NAMESPACE, SUPPORT_LANGUAGES, i18n };
