import { CropImage } from '@/components/modal/crop-image';
import { LogOut } from '@/components/modal/log-out';
import type { ModalStackParamsList } from '@/types';
import type { KeyValueType } from '@instagram/types';
import type { ModalOptions } from 'react-native-modalfy';

const defaultOptions: ModalOptions = {
	backdropOpacity: 0.4,
	backBehavior: 'clear',
	disableFlingGesture: true,
};

const modal: KeyValueType<keyof ModalStackParamsList, ModalOptions> = {
	LogOut: {
		modal: LogOut,
	},
	CropImage: {
		modal: CropImage,
	},
};

export { modal, defaultOptions };
