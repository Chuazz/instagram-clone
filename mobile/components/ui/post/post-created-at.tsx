import { Text } from 'dripsy';
import { usePost } from './post';
import { format } from 'date-fns';

const PostCreatedAt = () => {
    const post = usePost();

    if (!post?.data.date_created.get()) {
        return null;
    }

    return (
        <Text sx={{ color: 'gray500' }}>
            {format(post?.data.date_created.get(), 'MMM dd')}
        </Text>
    );
};

export { PostCreatedAt };
