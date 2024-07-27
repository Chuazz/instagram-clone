import { app$ } from '@/store';
import { when } from '@legendapp/state';
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage';
import { configureObservableSync, syncObservable } from '@legendapp/state/sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as EPSplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from 'react';
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking';

EPSplashScreen.preventAutoHideAsync();

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
        PublicSans: require('../../assets/fonts/PublicSans-Regular.ttf'),
        'PublicSans-Medium': require('../../assets/fonts/PublicSans-Medium.ttf'),
        'PublicSans-SemiBold': require('../../assets/fonts/PublicSans-SemiBold.ttf'),
        'PublicSans-Bold': require('../../assets/fonts/PublicSans-Bold.ttf'),
        'PublicSans-ExtraBold': require('../../assets/fonts/PublicSans-ExtraBold.ttf'),
        'PublicSans-Black': require('../../assets/fonts/PublicSans-Black.ttf'),
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
