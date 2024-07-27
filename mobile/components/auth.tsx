import { router } from 'expo-router';
import { useEffect } from 'react';

const Auth = () => {
    useEffect(() => {
        const checkLogin = async () => {
            // const isLogin = await AsyncStorage.getItem('auth');
            // router.navigate('/login');
        };

        checkLogin();
    }, []);

    return null;
};

export { Auth };
