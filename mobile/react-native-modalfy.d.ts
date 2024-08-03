import 'react-native-modalfy';
import { ModalStackParams } from './types/modal';

declare module 'react-native-modalfy' {
    interface ModalfyCustomParams extends ModalStackParams {}
}
