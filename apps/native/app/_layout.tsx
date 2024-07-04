import { SplashScreen } from '@/components/layout';
import { AppNavigation } from '@/components/navigation';
import { TamaguiProvider } from '@/providers/tamagui-provider';
import { StatusBar } from 'react-native';
import 'react-native-reanimated';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const RootLayout = () => {
	return (
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
	);
};

export default RootLayout;
