import { Post } from '@/components/ui/post';
import { PostFooter } from '@/components/ui/post/post-footer';
import { PostHeader } from '@/components/ui/post/post-header';
import { PostMedia } from '@/components/ui/post/post-media';
import { PostMediaCount } from '@/components/ui/post/post-media-count';
import { queryKey } from '@/configs/query-key';
import { useGet } from '@/hooks/use-get';
import { queryClient } from '@/providers/react-query-provider';
import { beauty } from '@/utils';
import { ReactNode } from 'react';
import { FlatList, RefreshControl } from 'react-native';

const HomePostList = ({ listHeader }: { listHeader: ReactNode }) => {
    const postQuery = useGet({
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
                    user_created: ['id', 'avatar', 'first_name'],
                    images: [
                        {
                            directus_files_id: [
                                'id',
                                'width',
                                'height',
                                'type',
                            ],
                        },
                    ],
                },
            ],
        },
    });

    return (
        <FlatList
            data={postQuery.data}
            keyExtractor={(item) => item?.id.toString()}
            ListHeaderComponent={() => listHeader}
            showsVerticalScrollIndicator={true}
            refreshControl={
                <RefreshControl
                    refreshing={postQuery.isFetching}
                    onRefresh={() => {
                        queryClient.invalidateQueries({
                            queryKey: queryKey.post.lists?.(),
                        });
                    }}
                />
            }
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
