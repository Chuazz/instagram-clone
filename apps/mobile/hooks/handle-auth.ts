import { client } from '@/utils/db';
import { type AuthenticationData, login } from '@directus/sdk';
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

export { useLogin };
