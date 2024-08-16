import { i18n } from '@instagram/configs';
import { observer } from '@legendapp/state/react';
import { Text, View } from 'dripsy';
import { User } from '../user';
import { UserAvatar } from '../user/user-avatar';
import { UserName } from '../user/user-name';
import { usePost } from './post';

const PostUser = observer(() => {
	const data = usePost()?.data.get();

	if (!data?.user_created) {
		return null;
	}

	return (
		<User
			data={data.user_created}
			sx={{
				flexDirection: 'row',
				gap: 'sm',
				alignItems: 'center',
			}}
		>
			<UserAvatar size={36} borderSize={44} />

			<View>
				<UserName />

				<Text>{i18n.t('post.suggested_for_you')}</Text>
			</View>
		</User>
	);
});

export { PostUser };
