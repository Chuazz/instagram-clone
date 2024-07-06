import { ScrollView } from 'tamagui';
import { HomeStoryItem } from './home-story-item';
import { Post } from '@super-app/types/src/data/post';
import { HORIZONTAL_PADDING } from '@super-app/configs/src/style-config';

const data: Post[] = [
	{
		id: 1,
		images: [],
		thumbnail: '',
		user: {
			id: 2,
			avatar: '',
			name: 'ricky_r_simpson',
		},
	},
];

const HomeStory = () => {
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			px={HORIZONTAL_PADDING}
		>
			{data.map((item) => (
				<HomeStoryItem
					key={item.id}
					data={item}
				/>
			))}
		</ScrollView>
	);
};

export { HomeStory };
