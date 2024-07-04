import tamaguiConfig from '@/tamagui.config';
import { ReactNode } from 'react';
import { useColorScheme } from 'react-native';
import { TamaguiProvider as Provider, Theme } from 'tamagui';

const TamaguiProvider = ({ children }: { children: ReactNode }) => {
	const mode = useColorScheme();

	return (
		<Provider config={tamaguiConfig}>
			<Theme name={mode === 'dark' ? 'dark' : 'light'}>{children}</Theme>
		</Provider>
	);
};

export { TamaguiProvider };
