import { MediaLibrary } from '@/components/bottom-sheet/media-library';
import { MediaPicker } from '@/components/bottom-sheet/media-picker';
import { SelectLanguage } from '@/components/bottom-sheet/select-language';
import { BottomSheetStackParamsList } from '@/types/bottom-sheet';
import { KeyValueType } from '@/types/common';
import { ElementType } from 'react';

const bottomSheet: KeyValueType<keyof BottomSheetStackParamsList, ElementType> =
    {
        SelectLanguage,
        MediaPicker,
        MediaLibrary,
    };

export { bottomSheet };
