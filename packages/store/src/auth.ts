import { observable } from '@legendapp/state';

const auth$ = observable({
	isLogin: false,
});

export { auth$ };
