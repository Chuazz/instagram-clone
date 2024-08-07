/* eslint-disable @typescript-eslint/no-explicit-any */
import { AccountScreen } from '@/screens/auth/account';
import { AvatarScreen } from '@/screens/auth/avatar';
import { BirthDayScreen } from '@/screens/auth/birthday';
import { LogInScreen } from '@/screens/auth/log-in';
import { NameScreen } from '@/screens/auth/name';
import { PasswordScreen } from '@/screens/auth/password';
import { PolicyScreen } from '@/screens/auth/policy';
import { SaveLoginScreen } from '@/screens/auth/save-login';
import { UserNameScreen } from '@/screens/auth/user-name';
import { HomeScreen } from '@/screens/home';
import { WelcomeScreen } from '@/screens/welcome';
import { KeyValueType } from '@/types/common';
import { AppRouteParams, AuthRouteParams } from '@/types/route';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FC } from 'react';

const authRoutes: KeyValueType<
    keyof AuthRouteParams,
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
    PolicyScreen: {
        component: PolicyScreen,
    },
    AvatarScreen: {
        component: AvatarScreen,
    },
};

const appRoutes: KeyValueType<
    keyof AppRouteParams,
    {
        options?: NativeStackNavigationOptions;
        component: FC<any>;
    }
> = {
    HomeScreen: {
        component: HomeScreen,
    },
    WelcomeScreen: {
        component: WelcomeScreen,
    },
};

const routes = Object.assign(appRoutes, authRoutes);

export { routes, appRoutes, authRoutes };
