import { defineHook } from '@directus/extensions-sdk';
import { randomUUID } from 'crypto';

const POST_FOLDER_ID = '78eb3130-954d-4c4c-ae7b-fdddb658a589';

export default defineHook(({ action }) => {
	action('items.create', async (data, context) => {
		const payload = data.payload;

		if (data.collection === 'post') {
			await context.database.table('directus_folders').insert({
				id: randomUUID(),
				name: data.key,
				parent: POST_FOLDER_ID,
			});
		}

		if (data.collection === 'post_files') {
			const foundPostFolderById = (
				await context.database
					.table('directus_folders')
					.where({
						name: payload.post_id,
						parent: POST_FOLDER_ID,
					})
					.limit(1)
			)[0];

			await context.database
				.table('directus_files')
				.where({
					id: payload.directus_files_id.id,
				})
				.update({
					folder: foundPostFolderById.id,
				});
		}
	});

	action('items.update', async (data, context) => {
		const payload = data.payload;

		if (data.collection === 'post_files') {
			const foundPostFolderById = (
				await context.database
					.table('directus_folders')
					.where({
						name: payload.post_id,
						parent: POST_FOLDER_ID,
					})
					.limit(1)
			)[0];

			await context.database
				.table('directus_files')
				.where({
					id: payload.directus_files_id.id,
				})
				.whereNot({
					folder: foundPostFolderById.id,
				})
				.update({
					folder: foundPostFolderById.id,
				});
		}
	});
});
