import { View } from 'dripsy';
import { PostTopRightAction } from './post-top-right-action';
import { PostUser } from './post-user';

const PostHeader = () => {
	return (
		<View
			sx={{
				flexDirection: 'row',
				justifyContent: 'space-between',
				alignItems: 'center',
				px: 'md',
			}}
		>
			<PostUser />

			<PostTopRightAction />
		</View>
	);
};

export { PostHeader };
