import { defineHook } from '@directus/extensions-sdk';
import {
    createDirectus,
    deleteFiles,
    login,
    rest,
    withToken,
} from '@directus/sdk';
import { randomUUID } from 'crypto';

const client = createDirectus('http://172.18.127.185:8055').with(rest());

const auth = client.request(login('sonnv1912@gmail.com', '11111111'));

export default defineHook(({ action, filter }) => {
    action('post.items.create', async (data, context) => {
        const payload = data.payload;
        const postFolderInsertedId = randomUUID();

        const parentFolder = await context.database
            .table('directus_folders')
            .where('name', 'post')
            .first();

        const postFolder = await context.database
            .table('directus_folders')
            .where('name', data.key)
            .where('parent', parentFolder?.id || '')
            .first();

        if (!parentFolder) {
            const parentInsertedId = randomUUID();

            await context.database.table('directus_folders').insert({
                id: parentInsertedId,
                name: 'post',
            });

            await context.database.table('directus_folders').insert({
                id: postFolderInsertedId,
                name: data.key,
                parent: parentInsertedId,
            });
        } else if (parentFolder && !postFolder) {
            await context.database.table('directus_folders').insert({
                id: postFolderInsertedId,
                name: data.key,
                parent: parentFolder.id,
            });
        }

        if (payload?.images?.create) {
            payload.images.create.forEach(
                async (image: {
                    directus_files_id: {
                        id: string;
                    };
                }) => {
                    await context.database
                        .table('directus_files')
                        .where({
                            id: image.directus_files_id.id,
                        })
                        .update({
                            folder: postFolder
                                ? postFolder.id
                                : postFolderInsertedId,
                        });
                },
            );
        }
    });

    action('post.items.update', async (data, context) => {
        const payload = data.payload;

        if (payload?.images?.delete?.length) {
            payload?.images?.delete.forEach(async (element: number) => {
                const postFileQuery = context.database
                    .table('post_files')
                    .where('id', element);

                const postFileFound = await postFileQuery.first();

                await context.database
                    .table('directus_files')
                    .where('id', postFileFound.directus_files_id)
                    .first()
                    .delete();

                await postFileQuery.delete();
            });
        }

        if (payload?.images?.create?.length) {
            const parentFolder = await context.database
                .table('directus_folders')
                .where('name', 'post')
                .first();

            const postFolder = await context.database
                .table('directus_folders')
                .where('name', data.keys[0])
                .where('parent', parentFolder.id)
                .first();

            payload?.images?.create.forEach(
                async (image: {
                    directus_files_id: {
                        id: string;
                    };
                }) => {
                    await context.database
                        .table('directus_files')
                        .where({
                            id: image.directus_files_id.id,
                        })
                        .update({
                            folder: postFolder.id,
                        });
                },
            );
        }
    });

    filter('post.items.delete', async (data, _meta, context) => {
        const payload = (data as number[])?.[0];
        const token = (await auth).access_token;

        if (!token) {
            return;
        }

        const postFilesQuery = context.database
            .table('post_files')
            .where('post_id', payload);

        const postFiles = await postFilesQuery.select();

        if (postFiles.length) {
            const parentFolder = await context.database
                .table('directus_folders')
                .where('name', 'post')
                .first();

            await client.request(
                withToken(
                    token,
                    deleteFiles(
                        postFiles.map(
                            (file: { directus_files_id: string }) =>
                                file.directus_files_id,
                        ),
                    ),
                ),
            );

            await context.database
                .table('directus_folders')
                .where('name', payload)
                .where('parent', parentFolder.id)
                .delete();

            await postFilesQuery.delete();
        }
    });
});
