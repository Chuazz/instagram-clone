import { Stack } from 'expo-router';

const AppNavigation = () => {
	return (
		<Stack
			screenOptions={{
				headerShown: false,
			}}
		>
			<Stack.Screen name='(tabs)/index' />
		</Stack>
	);
};

export { AppNavigation };
