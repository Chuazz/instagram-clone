import { ImagePicker } from '@/components/bottom-sheet/image-picker';
import { SelectLanguage } from '@/components/bottom-sheet/select-language';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { KeyValueType } from '@/types/common';
import { ElementType } from 'react';

const bottomSheet: KeyValueType<keyof BottomSheetsType, ElementType> = {
    SelectLanguage,
    ImagePicker,
};

export { bottomSheet };
