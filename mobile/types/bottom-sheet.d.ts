import { OpenSheetProps } from '@/store/bottom-sheet';
import { Asset } from 'expo-media-library';
import { OptionType } from './common';

type BaseBottomSheetProps<T> = T & {
    closeSheet: () => void;
    openSheet: <TName extends keyof BottomSheetStackParamsList>(
        _props: OpenSheetProps<TName>,
    ) => void;
};

type BottomSheetStackParamsList = {
    SelectLanguage: BaseBottomSheetProps<{}>;
    MediaPicker: BaseBottomSheetProps<{
        multiple?: boolean;
        moreOptions?: OptionType[];
        onSelect: (_items: Asset[]) => void;
    }>;
};

export { BaseBottomSheetProps, BottomSheetStackParamsList };
