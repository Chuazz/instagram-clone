import { defineHook } from '@directus/extensions-sdk';
import { randomUUID } from 'crypto';
import fs from 'fs';

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

        const postFilesQuery = context.database
            .table('post_files')
            .where('post_id', payload);
        const postFiles = await postFilesQuery.select();

        if (postFiles.length) {
            const parentFolder = await context.database
                .table('directus_folders')
                .where('name', 'post')
                .first();

            const fileQuey = context.database.table('directus_files').whereIn(
                'id',
                postFiles.map(
                    (file: { directus_files_id: string }) =>
                        file.directus_files_id,
                ),
            );

            fs.readdir('/directus/uploads', async (err, uploadFiles) => {
                if (err?.message) {
                    return;
                }

                (await fileQuey).map(
                    async (file: { filename_disk: string }) => {
                        const foundUploadFiles = uploadFiles.filter((t) =>
                            t.includes(file.filename_disk.split('.')?.[0]!),
                        );

                        foundUploadFiles.forEach((foundUploadFile) => {
                            fs.unlinkSync(
                                `/directus/uploads/${foundUploadFile}`,
                            );
                        });
                    },
                );

                await fileQuey.delete();

                await context.database
                    .table('directus_folders')
                    .where('name', payload)
                    .where('parent', parentFolder.id)
                    .delete();

                await postFilesQuery.delete();
            });
        }
    });
});
