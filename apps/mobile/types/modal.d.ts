import type { MediaType } from './common';

type ModalStackParamsList = {
	LogOut: undefined;
	CropImage: {
		image?: MediaType;
		onSuccess: (_result: MediaType) => void;
	};
};

export type { ModalStackParamsList };
