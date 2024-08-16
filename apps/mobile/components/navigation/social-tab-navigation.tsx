import { HomeScreen } from '@/screens/home';
import { SearchScreen } from '@/screens/search';
import type { image } from '@instagram/configs';
import type { TabStackParamList } from '@instagram/types';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useDripsyTheme } from 'dripsy';
import { Image } from '../ui/image';

const Tab = createBottomTabNavigator<TabStackParamList>();

const SocialTabNavigation = () => {
	const { theme } = useDripsyTheme();

	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				headerShown: false,
				tabBarInactiveTintColor: theme.colors.gray300,
				tabBarActiveTintColor: theme.colors.black,
				tabBarShowLabel: false,
				tabBarIcon: ({ focused, color, size }) => {
					let icon: keyof typeof image = focused
						? 'HomeFillIcon'
						: 'HomeOutlineIcon';

					if (route.name === 'SearchScreen') {
						icon = focused ? 'SearchFillIcon' : 'SearchOutlineIcon';
					}

					return (
						<Image
							source={icon}
							sx={{
								tintColor: color,
								width: size,
								height: size,
							}}
						/>
					);
				},
			})}
		>
			<Tab.Screen name='HomeScreen' component={HomeScreen} />

			<Tab.Screen name='SearchScreen' component={SearchScreen} />
		</Tab.Navigator>
	);
};

export { SocialTabNavigation };
