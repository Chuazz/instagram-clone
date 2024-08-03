import { bottomSheet } from '@/configs/bottom-sheet';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { observable } from '@legendapp/state';
import { ReactNode } from 'react';

export type OpenSheetProps = {
    name: keyof BottomSheetsType;
    listing?: boolean;
    params?: Omit<BottomSheetsType[keyof BottomSheetsType], 'openSheet'>;
    options?: Omit<BottomSheetModalProps, 'children'>;
};

export type BottomSheetType = {
    sheet: ReactNode | undefined;
    listing: boolean;

    options: Omit<BottomSheetModalProps, 'children'> | undefined;

    openSheet: (_props: OpenSheetProps) => void;
};

const bottomSheet$ = observable<BottomSheetType>({
    sheet: undefined,
    options: undefined,
    listing: false,

    openSheet({ name, options, params, listing }) {
        const Component = bottomSheet[name];

        bottomSheet$.sheet.set(
            <Component
                {...params}
                closeSheet={() => bottomSheet$.sheet.set(undefined)}
            />,
        );
        bottomSheet$.options.set(options);
        bottomSheet$.listing.set(!!listing);
    },
});

export { bottomSheet$ };
