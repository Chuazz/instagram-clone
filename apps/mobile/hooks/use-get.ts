import { client } from '@/utils/db';
import type { Query } from '@directus/sdk';
import { readItems } from '@directus/sdk';
import { queryKey } from '@instagram/configs';
import type { CollectionType } from '@instagram/types';
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
			queryKey[collection][type === 'detail' ? 'detail' : 'list']?.(query) ||
			[],
		queryFn: () => {
			return client.request<CollectionType[TCollection][]>(
				readItems(collection, query),
			);
		},
	});
};

export { useGet };
export type { UseGetType };
