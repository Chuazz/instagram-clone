import type {
	CollectionType,
	KeyValueType,
	SystemCollectionType,
} from '@instagram/types';

type QueryOption = {
	lists: (_filter?: object) => unknown[];
	list: (_filter?: object) => unknown[];
	detail: (_filter?: object) => unknown[];
};

const queryKey: KeyValueType<
	keyof (SystemCollectionType & CollectionType),
	QueryOption
> = {
	post: {
		lists: () => ['list', 'posts'],
		list: (filter) => ['list', 'posts', filter],
		detail: (filter) => ['detail', 'post', filter],
	},
	user: {
		lists: () => ['list', 'users'],
		list: (filter) => ['list', 'users', filter],
		detail: (filter) => ['detail', 'user', filter],
	},
};

export { queryKey };
