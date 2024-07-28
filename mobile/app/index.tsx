import { app$ } from '@/store';
import { Show } from '@legendapp/state/react';
import { Redirect } from 'expo-router';

const RootPage = () => {
    return (
        <Show
            if={app$.isLogin}
            else={<Redirect href='/auth/log-in' />}
        >
            <Redirect href='/' />
        </Show>
    );
};

export default RootPage;
