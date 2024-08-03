import { Text } from 'dripsy';
import { usePost } from './post';

const PostContent = () => {
    const post = usePost();

    if (!post?.data.content.get()) {
        return null;
    }

    return (
        <Text numberOfLines={1}>
            {post?.data.user_created.first_name.get()}
            {post?.data.user_created.last_name.get()}

            <Text> {post?.data.content.get()}</Text>
        </Text>
    );
};

export { PostContent };
