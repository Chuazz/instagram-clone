import { queryKey } from '@/configs/query-key';
import { CollectionArrayType, CollectionType } from '@/types/collection';
import { client } from '@/utils/db';
import { Query, readItems } from '@directus/sdk';
import { useQuery } from '@tanstack/react-query';

type UseGetType<TCollection extends CollectionArrayType> = {
    collection: TCollection;
    query?: Query<CollectionType[TCollection], CollectionType[TCollection]>;
    type?: 'list' | 'detail';
};

const useGet = <TCollection extends CollectionArrayType>({
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
            const request = await client.request(readItems(collection, query));

            return request as CollectionType[TCollection][];
        },
    });
};

export { useGet };
export type { UseGetType };
