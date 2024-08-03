import { LANGUAGES, FALLBACK_LANGUAGE } from '@/configs/i18n';
import { LanguageType } from '@/types/common';
import { observable } from '@legendapp/state';
import { getLocales } from 'expo-localization';

type AppType = {
    locale: LanguageType;
    isLogin: boolean;
};

const userLocale = __DEV__
    ? LANGUAGES.en.code
    : (getLocales()[0]?.languageCode as LanguageType);

const app$ = observable<AppType>({
    locale: userLocale ? userLocale : FALLBACK_LANGUAGE,
    isLogin: false,
});

export { app$ };
