import { Post } from '@/components/ui/post/post';
import { PostFooter } from '@/components/ui/post/post-footer';
import { PostHeader } from '@/components/ui/post/post-header';
import { PostMedia } from '@/components/ui/post/post-media';
import { PostMediaCount } from '@/components/ui/post/post-media-count';
import { queryKey } from '@super-app/configs/src';
import { useGet } from '@super-app/hooks/src';
import { queryClient } from '@super-app/providers/src';
import { ReactNode } from 'react';
import { FlatList, RefreshControl } from 'react-native';

const HomePostList = ({ listHeader }: { listHeader: ReactNode }) => {
	const storyQuery = useGet({
		collection: 'post',
		query: {
			filter: {
				type: {
					_eq: 'post',
				},
			},
			fields: [
				'id',
				'total_comments',
				'total_likes',
				'content',
				'date_created',
				{
					user_created: ['avatar', 'first_name', 'last_name'],
					images: [
						{
							directus_files_id: ['id', 'width', 'height'],
						},
					],
				},
			],
		},
	});

	return (
		<FlatList
			data={storyQuery.data}
			keyExtractor={(item) => item?.id.toString()}
			ListHeaderComponent={() => listHeader}
			showsVerticalScrollIndicator={false}
			refreshControl={
				<RefreshControl
					refreshing={storyQuery.isFetching}
					onRefresh={() => {
						queryClient.invalidateQueries({
							queryKey: queryKey.post.lists?.(),
						});
					}}
				/>
			}
			contentContainerStyle={{
				gap: 28,
				paddingBottom: 12,
			}}
			renderItem={({ item }) => (
				<Post data={item}>
					<PostHeader />

					<PostMedia>
						<PostMediaCount />
					</PostMedia>

					<PostFooter />
				</Post>
			)}
		/>
	);
};

export { HomePostList };
