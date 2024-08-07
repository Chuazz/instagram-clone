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
import { Button } from './components/form/button';
import { reloadAsync } from 'expo-updates';

const App = observer(() => {
    return (
        <GestureHandlerRootView>
            <ReactQueryProvider>
                <DripsyProvider theme={theme}>
                    <SafeAreaProvider>
                        <StatusBar style='dark' />

                        <SplashScreen>
                            {__DEV__ && (
                                <Button
                                    content='reload'
                                    size='sm'
                                    rounded={false}
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        right: 0,
                                        zIndex: 9999,
                                    }}
                                    onPress={async () => {
                                        await reloadAsync();
                                    }}
                                />
                            )}
                            <AppBottomSheet />

                            <Text
                                sx={{
                                    display: 'none',
                                }}
                            >
                                {trans('')}
                            </Text>

                            <ModalProvider>
                                <Navigation />
                            </ModalProvider>
                        </SplashScreen>
                    </SafeAreaProvider>
                </DripsyProvider>
            </ReactQueryProvider>
        </GestureHandlerRootView>
    );
});

export default App;
