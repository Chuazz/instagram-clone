import { appRoutes } from '@/configs/route';
import type { RouteStackParamsList } from '@/types/routes';
import { app$ } from '@instagram/stores';
import { Show, observer } from '@legendapp/state/react';
import {
	NavigationContainer,
	createNavigationContainerRef,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { ReactNode } from 'react';
import { AuthNavigation } from './auth-navigation';

const Stack = createNativeStackNavigator<RouteStackParamsList>();

const navigationRef = createNavigationContainerRef();

const Navigation = observer(({ children }: { children: ReactNode }) => {
	return (
		<NavigationContainer ref={navigationRef}>
			{children}

			<Show if={() => app$.isLogin.get()} else={AuthNavigation}>
				<Stack.Navigator
					screenOptions={{
						headerShown: false,
					}}
					initialRouteName='MainTab'
				>
					{Object.keys(appRoutes).map((key) => (
						<Stack.Screen
							key={key}
							name={key as keyof typeof appRoutes}
							component={appRoutes[key as keyof typeof appRoutes].component}
							options={appRoutes[key as keyof typeof appRoutes].options}
						/>
					))}
				</Stack.Navigator>
			</Show>
		</NavigationContainer>
	);
});

export { Navigation, navigationRef };
