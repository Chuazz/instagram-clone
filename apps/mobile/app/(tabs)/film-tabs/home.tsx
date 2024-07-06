import { Screen } from '@/components/layout';
import { i18n } from '@super-app/configs/src/i18n-config';
import { Text } from 'react-native';

const HomeScreen = () => {
	return (
		<Screen>
			<Text>{i18n.t('common.hi')}</Text>
		</Screen>
	);
};

export default HomeScreen;
