import { app$ } from '@instagram/stores';
import { when } from '@legendapp/state';
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking';
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage';
import { configureObservableSync, syncObservable } from '@legendapp/state/sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import { hideAsync, preventAutoHideAsync } from 'expo-splash-screen';
import { type ReactNode, useEffect } from 'react';
import { font } from '@instagram/assets';

preventAutoHideAsync();

configureObservableSync({
	persist: {
		plugin: ObservablePersistAsyncStorage,
		asyncStorage: { AsyncStorage },
	},
});

enableReactTracking({
	warnUnobserved: true,
});

const SplashScreen = ({ children }: { children: ReactNode }) => {
	const [loaded] = useFonts({
		PublicSans: font.PublicSans,
		'PublicSans-Medium': font.PublicSansMedium,
		'PublicSans-SemiBold': font.PublicSansSemiBold,
		'PublicSans-Bold': font.PublicSansBold,
		'PublicSans-ExtraBold': font.PublicSansExtraBold,
		'PublicSans-Black': font.PublicSansBlack,
	});

	useEffect(() => {
		const handleLoad = async () => {
			if (loaded) {
				await when(
					syncObservable(app$, {
						persist: {
							name: 'app',
						},
					}).isLoaded,
				);

				hideAsync();
			}
		};

		handleLoad();
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return children;
};

export { SplashScreen };
