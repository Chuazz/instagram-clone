import PaginationDot from 'react-native-animated-pagination-dot';
import { usePost } from './post';
import { observer } from '@legendapp/state/react';

const PostMediaPaginate = observer(() => {
	const post = usePost();
	const data = post?.data.get();

	return (
		<PaginationDot
			activeDotColor='#32affe'
			inactiveDotColor='#adadad'
			curPage={post?.currentPage.get() || 0}
			maxPage={data?.images.length || 0}
		/>
	);
});

export { PostMediaPaginate };
