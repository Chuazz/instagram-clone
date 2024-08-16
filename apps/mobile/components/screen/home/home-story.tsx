import { useGet } from '@/hooks/use-get';
import { GAP_MD } from '@instagram/configs';
import { FlatList } from 'react-native';
import { HomeStoryItem } from './home-story-item';

const HomeStory = () => {
	const storyQuery = useGet({
		collection: 'post',
		query: {
			filter: {
				type: {
					_eq: 'story',
				},
			},
			fields: [
				'id',
				{
					user_created: ['*'],
				},
			],
		},
	});

	if (!storyQuery.data?.length) {
		return null;
	}

	return (
		<FlatList
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			showsVerticalScrollIndicator={false}
			data={storyQuery.data}
			contentContainerStyle={{
				paddingHorizontal: GAP_MD,
				marginTop: 20,
				gap: GAP_MD,
			}}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item }) => <HomeStoryItem data={item} />}
		/>
	);
};

export { HomeStory };
