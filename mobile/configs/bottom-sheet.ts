import { SelectLanguage } from '@/components/bottom-sheet';
import { KeyValueType } from '@/types';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { ElementType } from 'react';

const bottomSheet: KeyValueType<keyof BottomSheetsType, ElementType> = {
    SelectLanguage,
};

export { bottomSheet };
