import { queryKey } from '@/configs/query-key';
import { CollectionType } from '@/types/collection';
import { client } from '@/utils/db';
import { Query, readItems } from '@directus/sdk';
import { useQuery } from '@tanstack/react-query';

type UseGetType<TCollection extends keyof CollectionType> = {
    collection: TCollection;
    query?: Query<CollectionType[TCollection], CollectionType[TCollection]>;
    type?: 'list' | 'detail';
};

const useGet = <TCollection extends keyof CollectionType>({
    collection,
    query,
    type = 'list',
}: UseGetType<TCollection>) => {
    return useQuery({
        queryKey:
            queryKey[collection][type === 'detail' ? 'detail' : 'list']?.(
                query,
            ) || [],
        queryFn: async () => {
            return await client.request<CollectionType[TCollection][]>(
                readItems(collection, query),
            );
        },
    });
};

export { useGet };
export type { UseGetType };
