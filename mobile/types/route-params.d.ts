import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RouteParams = {
    LogInScreen: undefined;
    AccountScreen: undefined;
    BirthDayScreen: undefined;
    LogInScreen: undefined;
    NameScreen: undefined;
    PasswordScreen: undefined;
    SaveLoginScreen: undefined;
    UserNameScreen: undefined;
    HomeScreen: undefined;
    WelcomeScreen: undefined;
};

export type ScreenProps<T extends keyof RouteParams> = NativeStackScreenProps<
    RouteParams,
    T
>;

export { RouteParams, ScreenProps };
