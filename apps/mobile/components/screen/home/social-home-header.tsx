import { Image } from '@/components/ui';
import { SPACING } from '@super-app/configs/src/style-config';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { View } from 'tamagui';

const SocialHomeHeader = () => {
	return (
		<View
			mt={SPACING}
			px={SPACING}
			alignItems='center'
			flexDirection='row'
			justifyContent='space-between'
		>
			<Image
				source='SocialTextLogoImage'
				width={140}
				height={40}
			/>

			<View
				flexDirection='row'
				gap={16}
				alignItems='center'
			>
				<Ionicons
					name='heart-outline'
					size={30}
				/>

				<FontAwesome6
					name='facebook-messenger'
					size={27}
				/>
			</View>
		</View>
	);
};

export { SocialHomeHeader };
