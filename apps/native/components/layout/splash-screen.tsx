import { useFonts } from 'expo-font';
import * as EPSplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from 'react';

EPSplashScreen.preventAutoHideAsync();

const SplashScreen = ({ children }: { children: ReactNode }) => {
	const [loaded] = useFonts({
		Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
		InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
	});

	useEffect(() => {
		if (loaded) {
			EPSplashScreen.hideAsync();
		}
	}, [loaded]);

	if (!loaded) {
		return null;
	}

	return children;
};

export { SplashScreen };
