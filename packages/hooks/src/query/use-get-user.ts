import { client } from '@instagram/utils';
import { type DirectusUser, type Query, readUsers } from '@directus/sdk';
import { queryKey } from '@instagram/configs';
import type { User } from '@instagram/types/data';
import { useQuery } from '@tanstack/react-query';

const useGetUser = (query?: Query<DirectusUser<User>, DirectusUser<User>>) => {
	return useQuery({
		queryKey: queryKey.user.list,
		queryFn: async () => {
			const request = await client.request<User[]>(readUsers(query));

			return request;
		},
	});
};

export { useGetUser };
