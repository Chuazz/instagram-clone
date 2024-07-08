import { i18n } from '@super-app/configs/src';
import { Text } from 'tamagui';
import { usePost } from './post';

const PostTotalLikes = () => {
	const post = usePost();

	if (!post?.data.total_likes.get()) {
		return null;
	}

	return (
		<Text fontWeight={700}>
			{post?.data.total_likes.get()}{' '}
			{i18n.t('common.likes').toLowerCase()}
		</Text>
	);
};

export { PostTotalLikes };
