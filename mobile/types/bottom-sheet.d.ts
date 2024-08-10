import { OpenSheetProps } from '@/store/bottom-sheet';

type BaseBottomSheetProps<T> = T & {
    closeSheet: () => void;
    openSheet: <TName extends keyof BottomSheetStackParamsList>(
        _props: OpenSheetProps<TName>,
    ) => void;
};

type BottomSheetStackParamsList = {
    SelectLanguage: BaseBottomSheetProps<{}>;
    MediaPicker: BaseBottomSheetProps<{}>;
    MediaLibrary: BaseBottomSheetProps<{}>;
};

export { BaseBottomSheetProps, BottomSheetStackParamsList };
