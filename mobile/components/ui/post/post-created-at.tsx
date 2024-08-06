import { Text } from 'dripsy';
import { usePost } from './post';
import { format } from 'date-fns';
import { observer } from '@legendapp/state/react';

const PostCreatedAt = observer(() => {
    const post = usePost();

    if (!post?.data.date_created.get()) {
        return null;
    }

    return (
        <Text sx={{ color: 'gray500', fontSize: 'sm' }}>
            {format(post?.data.date_created.get(), 'MMM dd')}
        </Text>
    );
});

export { PostCreatedAt };
