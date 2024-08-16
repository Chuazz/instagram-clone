import type { AuthenticationData } from '@directus/sdk';
import { FALLBACK_LANGUAGE, LANGUAGES } from '@instagram/configs';
import type { LanguageType } from '@instagram/types';
import { observable } from '@legendapp/state';
import { currentTime } from '@legendapp/state/helpers/time';
import { differenceInDays } from 'date-fns';
import { getLocales } from 'expo-localization';

type AppType = {
	locale: LanguageType;
	auth: AuthenticationData | undefined;
	isLogin: boolean;
};

const userLocale = __DEV__
	? LANGUAGES.en.code
	: (getLocales()[0]?.languageCode as LanguageType);

const app$ = observable<AppType>({
	locale: userLocale ? userLocale : FALLBACK_LANGUAGE,
	auth: undefined,
	isLogin: () => {
		if (!app$.auth.expires.get()) {
			return false;
		}

		if (
			differenceInDays(
				new Date(currentTime.get().getTime() + (app$.auth.expires.get() || 0)),
				currentTime.get(),
			) > 0
		) {
			return true;
		}

		return false;
	},
});

export { app$ };
