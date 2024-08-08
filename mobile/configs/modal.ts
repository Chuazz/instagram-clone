import { CropImage } from '@/components/modal/crop-image';
import { LogOut } from '@/components/modal/log-out';
import { KeyValueType } from '@/types/common';
import { ModalStackParamsList } from '@/types/modal';
import { ModalOptions } from 'react-native-modalfy';

const modal: KeyValueType<keyof ModalStackParamsList, ModalOptions> = {
    LogOut: {
        modal: LogOut,
    },
    CropImage: {
        modal: CropImage,
    },
};

export { modal };
