import '@/configs/reactotron';
import { observer } from '@legendapp/state/react';
import { DripsyProvider, Text } from 'dripsy';
import 'react-native-reanimated';
import { theme } from './configs/theme';

const App = observer(() => {
	return (
		<DripsyProvider theme={theme}>
			<Text>hi</Text>
		</DripsyProvider>
	);
});

export default App;
