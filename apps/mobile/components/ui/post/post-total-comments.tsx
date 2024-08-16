import { Button } from '@/components/form/button';
import { i18n } from '@instagram/configs';
import { observer } from '@legendapp/state/react';
import { usePost } from './post';

const PostTotalComments = observer(() => {
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
});

export { PostTotalComments };
