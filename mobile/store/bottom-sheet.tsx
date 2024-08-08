import { bottomSheet } from '@/configs/bottom-sheet';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { observable } from '@legendapp/state';
import { ReactNode } from 'react';

export type OpenSheetProps<Type extends keyof BottomSheetsType> = {
    name: Type;
    params?: Omit<BottomSheetsType[Type], 'closeSheet'>;
};

export type BottomSheetType = {
    sheet: ReactNode | undefined;
    visible: boolean;

    openSheet: <Type extends keyof BottomSheetsType>(
        _props: OpenSheetProps<Type>,
    ) => void;
    closeSheet: () => void;
};

const bottomSheet$ = observable<BottomSheetType>({
    sheet: undefined,

    visible: false,

    openSheet({ name, params }) {
        const Component = bottomSheet[name];

        bottomSheet$.sheet.set(
            <Component
                {...params}
                closeSheet={() => {
                    bottomSheet$.visible.set(false);
                }}
            />,
        );

        bottomSheet$.visible.set(true);
    },

    closeSheet() {
        bottomSheet$.visible.set(false);
    },
});

export { bottomSheet$ };
