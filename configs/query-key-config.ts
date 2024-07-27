import { KeyValueType, CollectionArrayType } from '@/types';

type QueryOption = {
    lists?: (filter?: any) => any[];
    list?: (filter?: any) => any[];
    detail?: (filter?: any) => any[];
};

const queryKey: KeyValueType<CollectionArrayType, QueryOption> = {
    post: {
        lists: (filter) => ['list', 'posts'],
        list: (filter) => ['list', 'posts', filter],
        detail: (filter) => ['detail', 'post', filter],
    },
    user: {
        list: (filter) => ['list', 'users', filter],
        detail: (filter) => ['detail', 'user', filter],
    },
};

export { queryKey };
