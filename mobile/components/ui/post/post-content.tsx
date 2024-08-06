import { Text } from 'dripsy';
import { usePost } from './post';
import { observer } from '@legendapp/state/react';

const PostContent = observer(() => {
    const post = usePost();

    if (!post?.data.content.get()) {
        return null;
    }

    return (
        <Text
            numberOfLines={1}
            sx={{
                fontWeight: 'semibold',
            }}
        >
            {post?.data.user_created.first_name.get()}

            <Text> {post?.data.content.get()}</Text>
        </Text>
    );
});

export { PostContent };
