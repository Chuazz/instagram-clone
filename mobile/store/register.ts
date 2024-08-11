import { MediaType } from '@/types/common';
import { observable } from '@legendapp/state';

type RegisterType = {
    type: 'phone' | 'email';
    account: string;
    password: string;
    saveInfo: boolean;
    birth: string;
    name: string;
    userName: string;
    avatar: {
        cropped: MediaType | undefined;
        original: MediaType | undefined;
    };
};

const register$ = observable<RegisterType>({
    type: 'email',
    account: '',
    password: '',
    saveInfo: false,
    birth: new Date().toDateString(),
    name: '',
    userName: '',
    avatar: {
        cropped: undefined,
        original: undefined,
    },
});

export { register$ };
