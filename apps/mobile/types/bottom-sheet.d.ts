import type { Asset } from 'expo-media-library';
import type { OptionType } from './common';

type BottomSheetStackParamsList = {
	SelectLanguage: BaseBottomSheetProps<Record>;
	MediaPicker: BaseBottomSheetProps<{
		multiple?: boolean;
		moreOptions?: OptionType[];
		onSelect: (_items: Asset[]) => void;
	}>;
};

type BaseBottomSheetProps<T> = T & {
	closeSheet: () => void;
	openSheet: <TName extends keyof BottomSheetStackParamsList>(
		_props: OpenSheetProps<TName>,
	) => void;
};

export type { BaseBottomSheetProps, BottomSheetStackParamsList };
