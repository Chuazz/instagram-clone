import '@/configs/reactotron';
import { theme } from '@/configs/theme';
import { ModalProvider } from '@/providers/modal-provider';
import { trans } from '@/utils';
import { observer } from '@legendapp/state/react';
import { DripsyProvider, Text } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import { reloadAsync } from 'expo-updates';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppBottomSheet } from './components/bottom-sheet/app-bottom-sheet';
import { Button } from './components/form/button';
import { Navigation } from './components/layout/navigation';
import { SplashScreen } from './components/layout/splash-screen';
import { ReactQueryProvider } from './providers/react-query-provider';

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
