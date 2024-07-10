import { SplashScreen } from '@/components/layout';
import { AppNavigation } from '@/components/navigation';
import { TamaguiProvider } from '@/providers/tamagui-provider';
import { LegendState } from '@super-app/components/src';
import { ReactQueryProvider } from '@super-app/providers/src/react-query-provider';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
	Reactotron.configure({
		name: 'instagram-clone',
	})
		.useReactNative()
		.use(asyncStorage())
		.connect();
}

const RootLayout = () => {
	return (
		<>
			<LegendState />

			<ReactQueryProvider>
				<SafeAreaProvider>
					<SplashScreen>
						<StatusBar
							backgroundColor='black'
							barStyle='light-content'
						/>

						<TamaguiProvider>
							<AppNavigation />
						</TamaguiProvider>
					</SplashScreen>
				</SafeAreaProvider>
			</ReactQueryProvider>
		</>
	);
};

export default RootLayout;
