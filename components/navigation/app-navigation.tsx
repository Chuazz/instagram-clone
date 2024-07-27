import { Stack } from 'expo-router';

const AppNavigation = () => {
    // if (!app$.isLogin.get()) {
    //     return <Redirect href="_sitemap" />;
    // }

    return (
        <Stack
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name='(tabs)' />
        </Stack>
    );
};

export { AppNavigation };
