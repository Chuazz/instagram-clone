import { bottomSheet } from '@/configs/bottom-sheet';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { observable } from '@legendapp/state';
import { ReactNode } from 'react';

export type OpenSheetProps = {
    name: keyof BottomSheetsType;
    params?: BottomSheetsType[keyof BottomSheetsType];
};

export type BottomSheetType = {
    sheet: ReactNode | undefined;
    visible: boolean;

    openSheet: (_props: OpenSheetProps) => void;
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
