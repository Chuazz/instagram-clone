import { ActivityIndicator } from 'react-native';
import { View } from 'tamagui';

const LoadingScreen = () => {
	return (
		<View
			position='absolute'
			top={0}
			left={0}
			right={0}
			bottom={0}
			justifyContent='center'
			alignItems='center'
			backgroundColor='white'
		>
			<ActivityIndicator
				color='red'
				size='large'
			/>
		</View>
	);
};

export { LoadingScreen };
