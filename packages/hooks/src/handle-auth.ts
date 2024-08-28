import { client } from '@instagram/utils';
import {
	type AuthenticationData,
	type DirectusUser,
	createUser,
	login,
} from '@directus/sdk';
import { i18n } from '@instagram/configs';
import { app$, toast$ } from '@instagram/stores';
import type { ErrorResponse, LoginType } from '@instagram/types';
import { useMutation } from '@tanstack/react-query';

const useLogin = () =>
	useMutation<AuthenticationData, ErrorResponse, LoginType>({
		mutationFn: async (data) => {
			const request = await client.request(
				login(data.account, data.password, {
					mode: 'json',
				}),
			);

			return request;
		},
		onSuccess(data) {
			app$.auth.set(data);
		},
		onError(err) {
			toast$.show({
				subLabel: err.errors[0]?.message,
			});
		},
	});

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

export { useLogin, useCreateUser };
