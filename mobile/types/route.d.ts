import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthStackParamsList = {
    LogInScreen: undefined;
    AccountScreen: undefined;
    BirthDayScreen: undefined;
    LogInScreen: undefined;
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
    HomeScreen: undefined;
};

type RouteStackParamsList = AuthStackParamsList & AppStackParamsList;

export type ScreenProps<T extends keyof RouteStackParamsList> =
    NativeStackScreenProps<RouteStackParamsList, T>;

export {
    RouteStackParamsList,
    AuthStackParamsList,
    ScreenProps,
    RouteStackParamsList,
    AppStackParamsList,
};
