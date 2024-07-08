import { i18n } from '@super-app/configs/src';
import { Button } from 'tamagui';
import { usePost } from './post';

const PostTotalComments = () => {
	const post = usePost();

	if (!post?.data.total_comments.get()) {
		return null;
	}

	return (
		<Button>
			{i18n.t('common.view_all_comments', {
				total_comments: post.data.total_comments.get(),
			})}
		</Button>
	);
};

export { PostTotalComments };
