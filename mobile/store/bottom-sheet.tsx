import { bottomSheet } from '@/configs';
import { BottomSheetsType } from '@/types/bottom-sheet';
import { BottomSheetModalProps } from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { observable } from '@legendapp/state';
import { ReactNode } from 'react';

export type BottomSheetType = {
    sheet: ReactNode | undefined;

    options:
        | React.MemoExoticComponent<
              React.ForwardRefExoticComponent<
                  BottomSheetModalProps &
                      React.RefAttributes<BottomSheetModalMethods>
              >
          >
        | undefined;

    openSheet: (props: {
        name: keyof BottomSheetsType;
        params?: BottomSheetsType[keyof BottomSheetsType];
        options?: React.MemoExoticComponent<
            React.ForwardRefExoticComponent<
                BottomSheetModalProps &
                    React.RefAttributes<BottomSheetModalMethods>
            >
        >;
    }) => void;
};

const bottomSheet$ = observable<BottomSheetType>({
    sheet: undefined,
    options: undefined,

    openSheet({ name, options, params }) {
        const Component = bottomSheet[name];

        bottomSheet$.sheet.set(<Component {...params} />);
        bottomSheet$.options.set(options);
    },
});

export { bottomSheet$ };
