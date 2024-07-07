import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { useRef } from 'react';
import Carousel, { ICarouselInstance } from 'react-native-reanimated-carousel';
import { View } from 'tamagui';
import { Image } from '../image';
import { usePost } from './post';
import { SPACING } from '@super-app/configs/src';
import { observer } from '@legendapp/state/react';

const PostMedia = observer(() => {
	const post = usePost();
	const data = post?.data?.get();
	const ref = useRef<ICarouselInstance>(null);

	return (
		<View mt={SPACING}>
			<Carousel
				ref={ref}
				width={SCREEN_WIDTH}
				height={SCREEN_HEIGHT - 400}
				data={data?.images || []}
				onSnapToItem={(i) => {
					post?.currentPage.set(i);
				}}
				renderItem={({ item }) => (
					<Image
						source={item.directus_files_id.id}
						fromServer={true}
						aspectRatio={
							item.directus_files_id.width /
							item.directus_files_id.height
						}
					/>
				)}
			/>
		</View>
	);
});

export { PostMedia };
