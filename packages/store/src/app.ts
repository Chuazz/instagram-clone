import { observable } from '@legendapp/state';
import { FALLBACK_LANGUAGE } from '@super-app/configs/src/i18n-config';
import { LanguageType } from '@super-app/types/src';
import { getLocales } from 'expo-localization';

type AppType = {
	locale: LanguageType;
};

const userLocale = getLocales()[0]?.languageCode as LanguageType;

const app$ = observable<AppType>({
	locale: userLocale ? userLocale : FALLBACK_LANGUAGE,
});

export { app$ };
