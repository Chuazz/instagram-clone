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
};

type AppStackParamsList = {
    HomeScreen: undefined;
    WelcomeScreen: undefined;
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
