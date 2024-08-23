import type { MediaType } from '@instagram/types';

type ModalStackParamsList = {
	LogOut: undefined;
	CropImage: {
		image?: MediaType;
		onSuccess: (_result: MediaType) => void;
	};
};

export type { ModalStackParamsList };
