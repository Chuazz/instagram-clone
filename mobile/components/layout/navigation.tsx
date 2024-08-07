import { routes } from '@/configs/routes';
import { app$ } from '@/store/app';
import { RouteParams } from '@/types/route';
import { observer } from '@legendapp/state/react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RouteParams>();

const Navigation = observer(() => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
                initialRouteName={
                    app$.isLogin.get() ? 'HomeScreen' : 'LogInScreen'
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
