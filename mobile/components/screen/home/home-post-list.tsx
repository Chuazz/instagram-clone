import {
    Post,
    PostFooter,
    PostHeader,
    PostMedia,
    PostMediaCount,
} from '@/components/ui/post';
import { queryKey } from '@/configs';
import { useGet } from '@/hooks';
import { queryClient } from '@/providers';
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
