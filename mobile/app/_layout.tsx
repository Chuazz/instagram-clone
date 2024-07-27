import { SplashScreen } from '@/components/layout';
import { AppNavigation } from '@/components/navigation';
import { ReactQueryProvider } from '@/providers/react-query-provider';
import { TamaguiProvider } from '@/providers/tamagui-provider';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    Reactotron.configure({
        name: 'instagram-clone',
    })
        .useReactNative()
        .connect();
}

const RootLayout = () => {
    return (
        <ReactQueryProvider>
            <SafeAreaProvider>
                <StatusBar
                    backgroundColor="black"
                    barStyle="light-content"
                />

                <SplashScreen>
                    <TamaguiProvider>
                        <AppNavigation />
                    </TamaguiProvider>
                </SplashScreen>
            </SafeAreaProvider>
        </ReactQueryProvider>
    );
};

export default RootLayout;
