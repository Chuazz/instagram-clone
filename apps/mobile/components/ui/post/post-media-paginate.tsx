import { observer } from '@legendapp/state/react';
import PaginationDot from 'react-native-animated-pagination-dot';
import { usePost } from './post';

const PostMediaPaginate = observer(() => {
	const post = usePost();
	const data = post?.data.get();

	return (
		<PaginationDot
			activeDotColor='#0795f0'
			inactiveDotColor='#adadad'
			curPage={post?.currentPage.get() || 0}
			maxPage={data?.images.length || 0}
		/>
	);
});

export { PostMediaPaginate };
