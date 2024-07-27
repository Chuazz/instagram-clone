import { app$ } from '@/store';
import { Show } from '@legendapp/state/react';
import { Redirect } from 'expo-router';

const RootPage = () => {
    return (
        <Show
            if={app$.isLogin}
            else={<Redirect href='(features)/auth/log-in' />}
        >
            <Redirect href='(tabs)' />
        </Show>
    );
};

export default RootPage;
