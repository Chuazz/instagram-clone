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
	logOut: () => void;
};

const userLocale =
	1 === 1 ? LANGUAGES.en.code : (getLocales()[0]?.languageCode as LanguageType);

const app$ = observable<AppType>({
	locale: userLocale ? userLocale : FALLBACK_LANGUAGE,
	auth: undefined,

	isLogin: () => {
		const remainDay = differenceInDays(
			new Date(currentTime.get().getTime() + (app$.auth.expires.get() || 0)),
			currentTime.get(),
		);

		if (!app$.auth.expires.get()) {
			return false;
		}

		if (remainDay > 0) {
			return true;
		}

		return false;
	},

	logOut() {
		app$.auth.delete();
	},
});

export { app$ };
