import { routes } from '@/configs/routes';
import { RouteParams } from '@/types/route-params';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RouteParams>();

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}
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
};

export { Navigation };
