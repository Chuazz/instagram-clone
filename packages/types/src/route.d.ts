import type { NativeStackScreenProps } from '@react-navigation/native-stack';

type HomeTabStackParamList = {
	HomeScreen: undefined;
};

type SearchTabStackParamList = {
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

type AppStackParamsList = {
	SocialTab: undefined;
};

type TabStackParamList = HomeTabStackParamList & SearchTabStackParamList;

type RouteStackParamsList = AuthStackParamsList & AppStackParamsList;

type ScreenProps<T extends keyof RouteStackParamsList> = NativeStackScreenProps<
	RouteStackParamsList,
	T
>;

export type {
	AuthStackParamsList,
	ScreenProps,
	RouteStackParamsList,
	AppStackParamsList,
	HomeTabStackParamList,
	TabStackParamList,
};
