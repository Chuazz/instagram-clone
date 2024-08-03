import { CollectionArrayType } from '@/types/collection';
import { KeyValueType } from '@/types/common';

type QueryOption = {
    lists?: (_filter?: object) => unknown[];
    list?: (_filter?: object) => unknown[];
    detail?: (_filter?: object) => unknown[];
};

const queryKey: KeyValueType<CollectionArrayType, QueryOption> = {
    post: {
        lists: (filter) => ['list', 'posts', filter],
        list: (filter) => ['list', 'posts', filter],
        detail: (filter) => ['detail', 'post', filter],
    },
    user: {
        list: (filter) => ['list', 'users', filter],
        detail: (filter) => ['detail', 'user', filter],
    },
};

export { queryKey };
