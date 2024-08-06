import { AppBottomSheet } from '@/components/bottom-sheet';
import { SplashScreen } from '@/components/layout';
import { theme } from '@/configs';
import { ReactQueryProvider } from '@/providers';
import { trans } from '@/utils';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { DripsyProvider, Text } from 'dripsy';
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

const RootLayout = observer(() => {
    return (
        <GestureHandlerRootView>
            <ReactQueryProvider>
                <SafeAreaProvider>
                    <SplashScreen>
                        <DripsyProvider theme={theme}>
                            <BottomSheetModalProvider>
                                <Text
                                    sx={{
                                        display: 'none',
                                    }}
                                >
                                    {trans('')}
                                </Text>

                                <Stack
                                    screenOptions={{
                                        headerShown: false,
                                    }}
                                />

                                <AppBottomSheet />
                            </BottomSheetModalProvider>
                        </DripsyProvider>
                    </SplashScreen>
                </SafeAreaProvider>
            </ReactQueryProvider>
        </GestureHandlerRootView>
    );
});

export default RootLayout;
