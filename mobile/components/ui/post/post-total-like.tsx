import { Text } from 'dripsy';
import { usePost } from './post';
import { i18n } from '@/configs/i18n';
import { observer } from '@legendapp/state/react';

const PostTotalLikes = observer(() => {
    const post = usePost();

    if (!post?.data.total_likes.get()) {
        return null;
    }

    return (
        <Text>
            {post?.data.total_likes.get()}{' '}
            {i18n.t('common.likes').toLowerCase()}
        </Text>
    );
});

export { PostTotalLikes };
