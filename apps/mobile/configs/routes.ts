import { SocialTabNavigation } from '@/components/navigation/social-tab-navigation';
import { AccountScreen } from '@/screens/auth/account';
import { AvatarScreen } from '@/screens/auth/avatar';
import { BirthDayScreen } from '@/screens/auth/birthday';
import { FollowScreen } from '@/screens/auth/follow';
import { LogInScreen } from '@/screens/auth/log-in';
import { NameScreen } from '@/screens/auth/name';
import { PasswordScreen } from '@/screens/auth/password';
import { PolicyScreen } from '@/screens/auth/policy';
import { SaveLoginScreen } from '@/screens/auth/save-login';
import { UserNameScreen } from '@/screens/auth/user-name';
import { WelcomeScreen } from '@/screens/auth/welcome';
import { HomeScreen } from '@/screens/home';
import type {
	AppStackParamsList,
	AuthStackParamsList,
	HomeTabStackParamList,
	KeyValueType,
} from '@instagram/types';
import type { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import type { FC } from 'react';

const authRoutes: KeyValueType<
	keyof AuthStackParamsList,
	{
		options?: NativeStackNavigationOptions;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		component: FC<any>;
	}
> = {
	LogInScreen: {
		component: LogInScreen,
	},
	AccountScreen: {
		component: AccountScreen,
	},
	BirthDayScreen: {
		component: BirthDayScreen,
	},
	NameScreen: {
		component: NameScreen,
	},
	PasswordScreen: {
		component: PasswordScreen,
	},
	SaveLoginScreen: {
		component: SaveLoginScreen,
	},
	UserNameScreen: {
		component: UserNameScreen,
	},
	PolicyScreen: {
		component: PolicyScreen,
	},
	AvatarScreen: {
		component: AvatarScreen,
	},
	WelcomeScreen: {
		component: WelcomeScreen,
	},
	FollowScreen: {
		component: FollowScreen,
	},
};

const homeTabRoutes: KeyValueType<
	keyof HomeTabStackParamList,
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

const appRoutes: KeyValueType<
	keyof AppStackParamsList,
	{
		options?: NativeStackNavigationOptions;
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		component: FC<any>;
	}
> = {
	SocialTab: {
		component: SocialTabNavigation,
	},
};

const routes = {
	...appRoutes,
	...authRoutes,
};

export { appRoutes, authRoutes, homeTabRoutes, routes };
