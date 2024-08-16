import { observer, useObserve } from '@legendapp/state/react';
import { Text, useSx } from 'dripsy';
import Animated, {
	useSharedValue,
	withDelay,
	withSequence,
	withTiming,
} from 'react-native-reanimated';
import { usePost } from './post';

const PostMediaCount = observer(() => {
	const post = usePost();
	const opacity = useSharedValue(0);
	const sx = useSx();

	useObserve(post?.showPage, (target) => {
		if (target.value) {
			post?.showPage.set(false);

			opacity.value = withSequence(
				withTiming(1, {
					duration: 500,
				}),
				withDelay(
					5000,
					withTiming(0, {
						duration: 500,
					}),
				),
			);
		}
	});

	if (Number(post?.currentPage.get()) < 0) {
		return null;
	}

	return (
		<Animated.View
			style={[
				sx({
					backgroundColor: 'black',
					borderRadius: 'full',
					width: 44,
					py: 6,
					position: 'absolute',
					top: 'md',
					right: 'md',
				}),
				{
					opacity,
				},
			]}
		>
			<Text
				sx={{
					color: 'white',
					textAlign: 'center',
					fontSize: 'sm',
				}}
			>
				{Number(post?.currentPage.get()) + 1}/{post?.data.images.length}
			</Text>
		</Animated.View>
	);
});

export { PostMediaCount };
