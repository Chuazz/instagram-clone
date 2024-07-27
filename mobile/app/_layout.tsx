import { SplashScreen } from '@/components/layout';
import { theme } from '@/configs';
import { ReactQueryProvider } from '@/providers/react-query-provider';
import { DripsyProvider } from 'dripsy';
import { Stack } from 'expo-router';
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
                {/* <StatusBar
                    backgroundColor='black'
                    style='light'
                /> */}

                <SplashScreen>
                    <DripsyProvider theme={theme}>
                        <Stack
                            screenOptions={{
                                headerShown: false,
                            }}
                        />
                    </DripsyProvider>
                </SplashScreen>
            </SafeAreaProvider>
        </ReactQueryProvider>
    );
};

export default RootLayout;
