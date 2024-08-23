import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type TabStackParamsList = {
	MainTab: {
		screen: 'home' | 'search';
	};
};

type HomeTabStackParamsList = {
	HomeScreen: undefined;
};

type SearchTabStackParamsList = {
	SearchScreen: undefined;
};

type AuthStackParamsList = {
	LogInScreen: undefined;
	AccountScreen: undefined;
	BirthDayScreen: undefined;
	NameScreen: undefined;
	PasswordScreen: undefined;
	SaveLoginScreen: undefined;
	UserNameScreen: undefined;
	PolicyScreen: undefined;
	AvatarScreen: undefined;
	WelcomeScreen: undefined;
	FollowScreen: undefined;
};

type AppStackParamsList = TabStackParamsList;

type RouteStackParamsList = AuthStackParamsList & AppStackParamsList;

type ScreenProps<T extends keyof RouteStackParamsList> = NativeStackScreenProps<
	RouteStackParamsList,
	T
>;

export type {
	AuthStackParamsList,
	RouteStackParamsList,
	AppStackParamsList,
	ScreenProps,
};
export type { HomeTabStackParamsList, SearchTabStackParamsList };
