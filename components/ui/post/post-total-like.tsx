import { Text } from 'tamagui';
import { usePost } from './post';
import { i18n } from '@/configs';

const PostTotalLikes = () => {
    const post = usePost();

    if (!post?.data.total_likes.get()) {
        return null;
    }

    return (
        <Text fontWeight={700}>
            {post?.data.total_likes.get()} {i18n.t('common.likes').toLowerCase()}
        </Text>
    );
};

export { PostTotalLikes };
