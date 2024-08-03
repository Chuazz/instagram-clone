import { app$ } from '@/store/app';
import { when } from '@legendapp/state';
import { enableReactTracking } from '@legendapp/state/config/enableReactTracking';
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage';
import { configureObservableSync, syncObservable } from '@legendapp/state/sync';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFonts } from 'expo-font';
import * as EPSplashScreen from 'expo-splash-screen';
import { ReactNode, useEffect } from 'react';
import PublicSans from '@/assets/fonts/PublicSans-Regular.ttf';
import PublicSansMedium from '@/assets/fonts/PublicSans-Medium.ttf';
import PublicSansSemiBold from '@/assets/fonts/PublicSans-SemiBold.ttf';
import PublicSansBold from '@/assets/fonts/PublicSans-Bold.ttf';
import PublicSansExtraBold from '@/assets/fonts/PublicSans-ExtraBold.ttf';
import PublicSansBlack from '@/assets/fonts/PublicSans-Black.ttf';

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
        PublicSans: PublicSans,
        'PublicSans-Medium': PublicSansMedium,
        'PublicSans-SemiBold': PublicSansSemiBold,
        'PublicSans-Bold': PublicSansBold,
        'PublicSans-ExtraBold': PublicSansExtraBold,
        'PublicSans-Black': PublicSansBlack,
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
