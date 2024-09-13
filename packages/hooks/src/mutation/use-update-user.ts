import { updateUser } from '@directus/sdk';
import type { ErrorResponse } from '@instagram/types';
import type { User } from '@instagram/types/data';
import { client } from '@instagram/utils';
import { useMutation } from '@tanstack/react-query';

const useUpdateUser = () =>
	useMutation<unknown, ErrorResponse, User>({
		mutationFn: (data) => {
			return client.request(updateUser(data.id, data as any));
		},
	});

export { useUpdateUser };
