import { Post } from '@super-app/types/data';
import { Text, View } from 'tamagui';

const HomeStoryItem = ({ data }: { data: Post }) => {
	return (
		<View>
			<Text>{data.user.name}</Text>
		</View>
	);
};

export { HomeStoryItem };
