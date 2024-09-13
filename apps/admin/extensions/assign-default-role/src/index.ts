import { defineHook } from '@directus/extensions-sdk';
import { collection } from '@instagram/configs';
import type { Role } from '@instagram/types/data';

export default defineHook(({ action }) => {
	action('users.create', async (data, context) => {
		const customerRole = (
			(
				await context.database
					.table(collection.role)
					.where('name', 'customer')
					.limit(1)
			)?.[0] as Role
		)?.id;

		await context.database
			.table(collection.user)
			.where('id', data.key)
			.update('role', customerRole);
	});
});
