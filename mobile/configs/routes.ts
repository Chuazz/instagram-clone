/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { KeyValueType } from '@/types/common';
import { AppStackParamsList, AuthStackParamsList } from '@/types/route';
import { NativeStackNavigationOptions } from '@react-navigation/native-stack';
import { FC } from 'react';

const authRoutes: KeyValueType<
    keyof AuthStackParamsList,
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
    WelcomeScreen: {
        component: WelcomeScreen,
    },
    FollowScreen: {
        component: FollowScreen,
    },
};

const appRoutes: KeyValueType<
    keyof AppStackParamsList,
    {
        options?: NativeStackNavigationOptions;
        component: FC<any>;
    }
> = {
    HomeScreen: {
        component: HomeScreen,
    },
};

const routes = Object.assign(appRoutes, authRoutes);

export { routes, appRoutes, authRoutes };
