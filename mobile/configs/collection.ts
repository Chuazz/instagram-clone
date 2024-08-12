import { CollectionType, SystemCollectionType } from '@/types/collection';
import { KeyValueType } from '@/types/common';

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
