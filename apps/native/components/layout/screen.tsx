import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { View } from 'tamagui';

const Screen = ({
	children,
	backgroundColor = 'white',
}: {
	children: ReactNode;
	backgroundColor?: string;
}) => {
	const insets = useSafeAreaInsets();

	return (
		<View
			backgroundColor={backgroundColor}
			paddingTop={insets.top}
			flexGrow={1}
		>
			{children}
		</View>
	);
};

export { Screen };
