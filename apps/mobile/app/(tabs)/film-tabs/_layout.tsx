import { TabBarIcon } from '@/components/navigation';
import { Tabs } from 'expo-router';

const TabLayout = () => {
	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: 'black',
				tabBarShowLabel: false,
				headerShown: false,
			}}
		>
			<Tabs.Screen
				name='home'
				options={{
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'film' : 'film-outline'}
							color={color}
						/>
					),
				}}
			/>

			<Tabs.Screen
				name='search'
				options={{
					title: 'Search',
					tabBarIcon: ({ color, focused }) => (
						<TabBarIcon
							name={focused ? 'search' : 'search-outline'}
							color={color}
						/>
					),
				}}
			/>
		</Tabs>
	);
};

export default TabLayout;
