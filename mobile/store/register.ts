import { observable } from '@legendapp/state';
import { Asset } from 'expo-media-library';

type RegisterType = {
    type: 'phone' | 'email';
    account: string;
    password: string;
    saveInfo: boolean;
    birth: string;
    name: string;
    userName: string;
    avatar: Asset | undefined;
};

const register$ = observable<RegisterType>({
    type: 'email',
    account: '',
    password: '',
    saveInfo: false,
    birth: new Date().toDateString(),
    name: '',
    userName: '',
    avatar: undefined,
});

export { register$ };
