import type {
	CollectionType,
	KeyValueType,
	SystemCollectionType,
} from '@instagram/types';

const systemCollection: KeyValueType<keyof SystemCollectionType, string> = {
	user: 'directus_users',
	role: 'directus_roles',
};

const collection: KeyValueType<
	keyof (CollectionType & SystemCollectionType),
	string
> = {
	...systemCollection,
	post: 'post',
};

export { collection, systemCollection };
