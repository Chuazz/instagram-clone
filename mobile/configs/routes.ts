/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountScreen } from '@/screens/auth/account';
import { BirthDayScreen } from '@/screens/auth/birthday';
import { LogInScreen } from '@/screens/auth/log-in';
import { NameScreen } from '@/screens/auth/name';
import { PasswordScreen } from '@/screens/auth/password';
import { SaveLoginScreen } from '@/screens/auth/save-login';
import { UserNameScreen } from '@/screens/auth/user-name';
import { HomeScreen } from '@/screens/home';
import { WelcomeScreen } from '@/screens/welcome';
import { KeyValueType } from '@/types/common';
import { RouteParams } from '@/types/route-params';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FC } from 'react';

const routes: KeyValueType<
    keyof RouteParams,
    {
        options?: NativeStackNavigationOptions;
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
    HomeScreen: {
        component: HomeScreen,
    },
    WelcomeScreen: {
        component: WelcomeScreen,
    },
};

export { routes };
