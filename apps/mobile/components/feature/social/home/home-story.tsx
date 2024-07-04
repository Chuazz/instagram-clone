import { ScrollView } from 'tamagui';
import { HomeStoryItem } from './home-story-item';

const data = [
	{
		id: 1,
		name: 'ricky_r_simpson',
	},
];

const HomeStory = () => {
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
		>
			{data.map((item) => (
				<HomeStoryItem key={item.id} />
			))}
		</ScrollView>
	);
};

export { HomeStory };
