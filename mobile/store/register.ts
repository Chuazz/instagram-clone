import { observable } from '@legendapp/state';

type RegisterType = {
    type: 'phone' | 'email';
    account: string;
    password: string;
    saveInfo: boolean;
    birth: string;
    name: string;
};

const register$ = observable<RegisterType>({
    type: 'email',
    account: '',
    password: '',
    saveInfo: false,
    birth: new Date().toDateString(),
    name: '',
});

export { register$ };
