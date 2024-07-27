import { AppBottomSheet } from '@/components/bottom-sheet';
import { SplashScreen } from '@/components/layout';
import { theme } from '@/configs';
import { ReactQueryProvider } from '@/providers';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { DripsyProvider } from 'dripsy';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
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
        <GestureHandlerRootView>
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

                            <BottomSheetModalProvider>
                                <AppBottomSheet />
                            </BottomSheetModalProvider>
                        </DripsyProvider>
                    </SplashScreen>
                </SafeAreaProvider>
            </ReactQueryProvider>
        </GestureHandlerRootView>
    );
};

export default RootLayout;
