import 'react-native-modalfy';
import type { ModalStackParamsList } from './types/modal';

declare module 'react-native-modalfy' {
	interface ModalfyCustomParams extends ModalStackParamsList {}
}
