import { routes } from '@/configs/routes';
import { app$ } from '@/store/app';
import { RouteStackParamsList } from '@/types/route';
import { observer } from '@legendapp/state/react';
import {
    createNavigationContainerRef,
    NavigationContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ReactNode } from 'react';

const Stack = createNativeStackNavigator<RouteStackParamsList>();

export const navigationRef = createNavigationContainerRef();

const Navigation = observer(({ children }: { children: ReactNode }) => {
    return (
        <NavigationContainer ref={navigationRef}>
            {children}

            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={
                    app$.isLogin.get() ? 'HomeScreen' : 'PolicyScreen'
                }
            >
                {Object.keys(routes).map((key) => (
                    <Stack.Screen
                        key={key}
                        name={key as keyof typeof routes}
                        component={routes[key as keyof typeof routes].component}
                        options={routes[key as keyof typeof routes].options}
                    />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    );
});

export { Navigation };
