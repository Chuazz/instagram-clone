import { ImagePickerAsset } from 'expo-image-picker';

type BaseBottomSheetProps<T> = T & {
    closeSheet: () => void;
};

type BottomSheetsType = {
    SelectLanguage: BaseBottomSheetProps<{
        test: string;
    }>;
    ImagePicker: BaseBottomSheetProps<{
        onSuccess: (_result: ImagePickerAsset[]) => void;
    }>;
};

export { BaseBottomSheetProps, BottomSheetsType };
