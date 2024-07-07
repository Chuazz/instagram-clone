import { View } from 'tamagui';
import { PostMediaPaginate } from './post-media-paginate';
import { PostBottomLeftAction } from './post-bottom-left-action';
import { SPACING } from '@super-app/configs/src';
import { PostSave } from './post-save';

const FLEX_BASIS = '33.33333%';

const PostFooter = () => {
	return (
		<View
			flexDirection='row'
			alignItems='center'
			px={SPACING}
			mt={SPACING}
		>
			<View flexBasis={FLEX_BASIS}>
				<PostBottomLeftAction />
			</View>

			<View
				flexBasis={FLEX_BASIS}
				justifyContent='center'
				alignItems='center'
			>
				<PostMediaPaginate />
			</View>

			<View
				flexBasis={FLEX_BASIS}
				alignItems='flex-end'
			>
				<PostSave />
			</View>
		</View>
	);
};

export { PostFooter };
