import type { MediaType } from '@instagram/types';
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
	shareAvatar: boolean;
};

const register$ = observable<RegisterType>({
	type: 'email',
	account: '',
	password: '',
	saveInfo: false,
	birth: new Date().toDateString(),
	shareAvatar: false,
	name: '',
	userName: '',
	avatar: {
		cropped: undefined,
		original: undefined,
	},
});

export { register$ };
