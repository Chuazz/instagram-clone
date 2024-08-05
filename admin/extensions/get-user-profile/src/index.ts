import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter }) => {
    filter('users.read', (data, _meta, context) => {
        return (data as any[]).map(async (t) => {
            if (t.id) {
                const profile = await context.database
                    .table('user_profile')
                    .where('user_id', t.id)
                    .first();

                return {
                    ...t,
                    first_name: 'hi',
                    profile,
                };
            }

            return t;
        });
    });
});
