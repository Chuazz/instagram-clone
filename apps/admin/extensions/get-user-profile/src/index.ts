import { defineHook } from '@directus/extensions-sdk';
import type { Post, User } from '@instagram/types/data';

export default defineHook(({ filter }) => {
	filter('users.read', async (data, _meta, context) => {
		const result = await Promise.all(
			(data as User[]).map(async (t) => {
				if (t.id) {
					const profile = await context.database
						.table('user_profile')
						.where('user_id', t.id)
						.first()
						.select('gender');

					return {
						...t,
						...profile,
					};
				}

				return t;
			}),
		);

		return result;
	});

	filter('post.items.read', async (data, _meta, context) => {
		const result = await Promise.all(
			(data as Post[]).map(async (t) => {
				if (t?.user_created?.id) {
					const profile = await context.database
						.table('user_profile')
						.where('user_id', t?.user_created?.id || -1)
						.first()
						.select('gender');
					return {
						...t,
						user_created: {
							...t.user_created,
							...profile,
						},
					};
				}
				return t;
			}),
		);
		return result;
	});
});
