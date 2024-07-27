import { bottomSheet$ } from '@/store';
import { BottomSheetsType } from '@/types';
import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';

const useBottomSheet = () => {
    return {
        open(props: {
            name: keyof BottomSheetsType;
            params?: BottomSheetsType[keyof BottomSheetsType];
            options?: React.MemoExoticComponent<
                React.ForwardRefExoticComponent<
                    BottomSheetModalProps &
                        React.RefAttributes<BottomSheetModalMethods>
                >
            >;
        }) {
            bottomSheet$.openSheet(props);
        },
        close() {
            bottomSheet$.sheet.set(undefined);
        },
    };
};

export { useBottomSheet };
