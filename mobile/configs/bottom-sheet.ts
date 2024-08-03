import { SelectLanguage } from '@/components/bottom-sheet/select-language';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { KeyValueType } from '@/types/common';
import { ElementType } from 'react';

const bottomSheet: KeyValueType<keyof BottomSheetsType, ElementType> = {
    SelectLanguage,
};

export { bottomSheet };
