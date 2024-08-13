import 'react-native-modalfy';
import { ModalStackParamsList } from './types/modal';

declare module 'react-native-modalfy' {
    interface ModalfyCustomParams extends ModalStackParamsList {}
}
