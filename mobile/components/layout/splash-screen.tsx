import { app$ } from '@/store/app';
import { when } from '@legendapp/state';
import { syncObservable } from '@legendapp/state/sync';
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
        const handleLoad = async () => {
            await when(
                syncObservable(app$, {
                    persist: {
                        name: 'app',
                    },
                }).isLoaded,
            );

            if (loaded) {
                EPSplashScreen.hideAsync();
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
