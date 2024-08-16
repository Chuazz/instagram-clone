import '@/configs/reactotron';
import { theme } from '@instagram/configs';
import { ModalProvider } from '@/providers/modal-provider';
import { trans } from '@/utils';
import { observer } from '@legendapp/state/react';
import { DripsyProvider, Text } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppBottomSheet } from './components/bottom-sheet/app-bottom-sheet/app-bottom-sheet';
import { Navigation } from './components/navigation/app-navigation';
import { SplashScreen } from './components/layout/splash-screen';
import { Toast } from './components/ui/toast';
import { ReactQueryProvider } from '@instagram/providers';

const App = observer(() => {
	return (
		<GestureHandlerRootView>
			<ReactQueryProvider>
				<DripsyProvider theme={theme}>
					<SafeAreaProvider>
						<StatusBar style='dark' />

						<SplashScreen>
							<Text
								sx={{
									display: 'none',
								}}
							>
								{trans('')}
							</Text>

							<ModalProvider>
								<Navigation>
									<AppBottomSheet />

									<Toast />
								</Navigation>
							</ModalProvider>
						</SplashScreen>
					</SafeAreaProvider>
				</DripsyProvider>
			</ReactQueryProvider>
		</GestureHandlerRootView>
	);
});

export default App;
