import { NativeStackScreenProps } from '@react-navigation/native-stack';

type AuthRouteParams = {
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
};

type AppRouteParams = {
    HomeScreen: undefined;
    WelcomeScreen: undefined;
};

type RouteParams = AuthRouteParams & AppRouteParams;

export type ScreenProps<T extends keyof RouteParams> = NativeStackScreenProps<
    RouteParams,
    T
>;

export {
    RouteParams,
    AuthRouteParams,
    ScreenProps,
    RouteParams,
    AppRouteParams,
};
