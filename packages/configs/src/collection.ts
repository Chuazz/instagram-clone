import type {
	CollectionType,
	KeyValueType,
	SystemCollectionType,
} from '@instagram/types';

const systemCollection: KeyValueType<keyof SystemCollectionType, string> = {
	user: 'users',
	role: 'roles',
};

const collection: KeyValueType<
	keyof (CollectionType & SystemCollectionType),
	string
> = {
	...systemCollection,
	post: 'post',
};

export { collection, systemCollection };
