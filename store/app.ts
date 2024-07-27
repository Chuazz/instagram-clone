import { FALLBACK_LANGUAGE } from '@/configs';
import { LanguageType } from '@/types';
import { observable } from '@legendapp/state';
import { getLocales } from 'expo-localization';

type AppType = {
    locale: LanguageType;
    isLogin: boolean;
};

const userLocale = getLocales()[0]?.languageCode as LanguageType;

const app$ = observable<AppType>({
    locale: userLocale ? userLocale : FALLBACK_LANGUAGE,
    isLogin: false,
});

export { app$ };
