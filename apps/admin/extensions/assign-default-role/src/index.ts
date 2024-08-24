import { defineHook } from '@directus/extensions-sdk';
import { collection } from '@instagram/configs';
import type { Role } from '@instagram/types/data';
import { randomUUID } from 'node:crypto';

export default defineHook(({ action }) => {
	action('users.create', async (data, context) => {
		let customerRole = (
			(
				await context.database
					.table(collection.role)
					.where('name', 'customer')
					.limit(1)
			)?.[0] as Role
		).id;

		if (!customerRole) {
			customerRole = randomUUID();

			await context.database.table(collection.role).insert({
				id: customerRole,
				name: 'customer',
				icon: 'verified_user',
			});
		}

		await context.database
			.table(collection.user)
			.where('id', data.key)
			.update('role', customerRole);
	});
});
