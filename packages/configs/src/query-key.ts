import type {
	CollectionType,
	KeyValueType,
	SystemCollectionType,
} from '@instagram/types';

type QueryOption = {
	list: unknown[];
	detail: unknown[];
};

const queryKey: KeyValueType<
	keyof (SystemCollectionType & CollectionType),
	QueryOption
> = {
	post: {
		list: ['list', 'posts'],
		detail: ['detail', 'post'],
	},
	user: {
		list: ['list', 'users'],
		detail: ['detail', 'user'],
	},
	role: {
		list: ['list', 'roles'],
		detail: ['detail', 'role'],
	},
};

export { queryKey };
