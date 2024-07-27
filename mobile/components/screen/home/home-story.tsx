import { FlatList } from 'react-native';
import { HomeStoryItem } from './home-story-item';
import { View } from 'tamagui';
import { useGet } from '@/hooks/use-get';
import { SPACING } from '@/configs';

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

    return (
        <View>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                data={storyQuery.data}
                contentContainerStyle={{
                    paddingHorizontal: SPACING,
                    marginTop: 20,
                    gap: SPACING,
                }}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <HomeStoryItem data={item} />}
            />
        </View>
    );
};

export { HomeStory };
