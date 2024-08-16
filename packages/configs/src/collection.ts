import type {
	CollectionType,
	KeyValueType,
	SystemCollectionType,
} from '@instagram/types';

const systemCollection: KeyValueType<keyof SystemCollectionType, string> = {
	user: 'users',
};

const collection: KeyValueType<keyof CollectionType, string> = Object.assign(
	systemCollection,
	{
		post: 'post',
	},
);

export { collection, systemCollection };
