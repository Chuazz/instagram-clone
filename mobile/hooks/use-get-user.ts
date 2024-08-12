import { queryKey } from '@/configs/query-key';
import { User } from '@/types/data/user';
import { client } from '@/utils/db';
import { DirectusUser, Query, readUsers } from '@directus/sdk';
import { useQuery } from '@tanstack/react-query';

const useGetUser = (query?: Query<DirectusUser<User>, DirectusUser<User>>) => {
    return useQuery({
        queryKey: queryKey.user.list({}),
        queryFn: async () => {
            const request = await client.request<User[]>(readUsers(query));

            return request;
        },
    });
};

export { useGetUser };
