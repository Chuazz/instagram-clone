import { Ionicons } from '@expo/vector-icons';
import { SPACING } from '@super-app/configs/src';
import { View } from 'tamagui';

const PostBottomLeftAction = () => {
	return (
		<View
			flexDirection='row'
			alignItems='center'
			gap={SPACING}
		>
			<Ionicons
				name='heart-outline'
				size={25}
			/>

			<Ionicons
				name='chatbubble-outline'
				size={22}
				style={{
					transform: [{ rotate: '270deg' }],
				}}
			/>

			<Ionicons
				name='paper-plane-outline'
				size={22}
			/>
		</View>
	);
};

export { PostBottomLeftAction };
