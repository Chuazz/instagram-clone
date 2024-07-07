import { Text, View } from 'tamagui';
import { usePost } from './post';
import { Avatar } from '../avatar';
import { i18n } from '@super-app/configs/src';

const PostUser = () => {
	const data = usePost()?.data.get();

	return (
		<View
			flexDirection='row'
			gap={8}
			alignItems='center'
		>
			<Avatar
				size={40}
				borderSize={48}
				uri={data?.user_created.avatar}
			/>

			<View>
				<Text fontWeight={700}>
					{data?.user_created.first_name}
					{data?.user_created.last_name}
				</Text>

				<Text fontSize='$2'>{i18n.t('common.suggested_for_you')}</Text>
			</View>
		</View>
	);
};

export { PostUser };
