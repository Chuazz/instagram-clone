import { type DirectusUser, createUser } from '@directus/sdk';
import { i18n } from '@instagram/configs';
import { toast$ } from '@instagram/stores';
import type { ErrorResponse } from '@instagram/types';
import { client } from '@instagram/utils';
import { useMutation } from '@tanstack/react-query';

const useCreateUser = () =>
	useMutation<DirectusUser, ErrorResponse, DirectusUser>({
		mutationFn: async (data) => {
			const request = await client.request<DirectusUser>(createUser(data));

			return request;
		},
		onError(err) {
			if (
				err.errors[0]?.extensions.code === 'RECORD_NOT_UNIQUE' &&
				err.errors[0].extensions.field === 'email'
			) {
				toast$.show({
					subLabel: i18n.t('request.EMAIL_ALREADY_EXISTS'),
				});
			}
		},
	});
export { useCreateUser };
