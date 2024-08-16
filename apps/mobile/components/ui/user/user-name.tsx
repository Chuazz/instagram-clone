import { observer } from '@legendapp/state/react';
import { Text } from 'dripsy';
import { useUser } from './user';

const UserName = observer(() => {
	const user = useUser();

	return (
		<Text
			sx={{
				fontWeight: 'semibold',
			}}
		>
			{user?.data.first_name.get()}
		</Text>
	);
});

export { UserName };
