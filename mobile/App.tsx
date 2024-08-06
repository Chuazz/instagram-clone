import { theme } from '@/configs/theme';
import { ModalProvider } from '@/providers/modal-provider';
import { trans } from '@/utils';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { DripsyProvider, Text } from 'dripsy';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ReactQueryProvider } from './providers/react-query-provider';
import { SplashScreen } from './components/layout/splash-screen';
import { Navigation } from './components/layout/navigation';
import { AppBottomSheet } from './components/bottom-sheet/app-bottom-sheet';
import { StatusBar } from 'expo-status-bar';

const App = observer(() => {
    return (
        <GestureHandlerRootView>
            <ReactQueryProvider>
                <SafeAreaProvider>
                    <StatusBar style='dark' />

                    <SplashScreen>
                        <DripsyProvider theme={theme}>
                            <Text
                                sx={{
                                    display: 'none',
                                }}
                            >
                                {trans('')}
                            </Text>

                            <BottomSheetModalProvider>
                                <ModalProvider>
                                    <AppBottomSheet />

                                    <Navigation />
                                </ModalProvider>
                            </BottomSheetModalProvider>
                        </DripsyProvider>
                    </SplashScreen>
                </SafeAreaProvider>
            </ReactQueryProvider>
        </GestureHandlerRootView>
    );
});

export default App;
