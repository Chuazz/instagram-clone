import { SplashScreen } from '@/components/layout';
import { AppNavigation } from '@/components/navigation';
import { TamaguiProvider } from '@/providers/tamagui-provider';
import { ReactQueryProvider } from '@super-app/providers/src/react-query-provider';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableReactComponents } from '@legendapp/state/config/enableReactComponents';

enableReactComponents();

const RootLayout = () => {
	return (
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
	);
};

export default RootLayout;
