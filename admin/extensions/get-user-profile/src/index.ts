import { defineHook } from '@directus/extensions-sdk';

export default defineHook(({ filter }) => {
    filter('users.read', async (data, _meta, context) => {
        const result = await Promise.all(
            (data as any[]).map(async (t) => {
                if (t.id) {
                    try {
                        const profile = await context.database
                            .table('user_profile')
                            .where('user_id', t.id)
                            .first()
                            .select('gender');

                        return {
                            ...t,
                            ...profile,
                        };
                    } catch (error) {
                        console.log('🚀 ~ get user profile error:', error);
                    }
                }

                return t;
            }),
        );

        return result;
    });

    filter('post.items.read', async (data, _meta, context) => {
        const result = await Promise.all(
            (data as any[]).map(async (t) => {
                if (t?.user_created?.id) {
                    try {
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
                    } catch (error) {
                        console.log('🚀 ~ get user profile error:', error);
                    }
                }
                return t;
            }),
        );
        return result;
    });
});
