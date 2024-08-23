import { HomeScreen } from '@/screens/home';
import type { HomeTabStackParamsList } from '@/types';
import type { KeyValueType } from '@instagram/types';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { FC } from 'react';

const homeTabRoutes: KeyValueType<
	keyof HomeTabStackParamsList,
	{
		options?: NativeStackNavigationOptions;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		component: FC<any>;
	}
> = {
	HomeScreen: {
		component: HomeScreen,
	},
};

export { homeTabRoutes };
