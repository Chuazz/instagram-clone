import { Avatar } from '@/components/ui/avatar';
import { Post } from '@super-app/types/src/data/post';
import { Text, View } from 'tamagui';

const HomeStoryItem = ({ data }: { data: Post }) => {
	return (
		<View
			alignItems='center'
			gap={4}
		>
			<Avatar
				size={80}
				uri={data.user_created.avatar}
			/>

			<Text>
				{data.user_created.first_name}
				{data.user_created.last_name}
			</Text>
		</View>
	);
};

export { HomeStoryItem };
