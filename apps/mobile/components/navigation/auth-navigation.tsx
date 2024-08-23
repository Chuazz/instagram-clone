import { authRoutes } from '@/configs/route';
import type { AuthStackParamsList } from '@/types/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<AuthStackParamsList>();

const AuthNavigation = () => {
	return (
		<Stack.Navigator
			screenOptions={{
				headerShown: false,
			}}
			initialRouteName='LogInScreen'
		>
			{Object.keys(authRoutes).map((key) => (
				<Stack.Screen
					key={key}
					name={key as keyof typeof authRoutes}
					component={authRoutes[key as keyof typeof authRoutes].component}
					options={authRoutes[key as keyof typeof authRoutes].options}
				/>
			))}
		</Stack.Navigator>
	);
};

export { AuthNavigation };
