import { bottomSheet$ } from '@/store';
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetView,
} from '@gorhom/bottom-sheet';
import { BottomSheetModalMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import { observer, Show, useObserve } from '@legendapp/state/react';
import { useRef } from 'react';
import { Pressable, StyleSheet } from 'react-native';

const AppBottomSheet = observer(() => {
    const options = bottomSheet$.options.get();
    const ref = useRef<BottomSheetModalMethods>(null);

    useObserve(bottomSheet$.sheet, (target) => {
        if (target.value) {
            ref.current?.present();

            return;
        }

        ref.current?.dismiss();
    });

    const renderBackdrop = () => {
        return (
            <Pressable
                style={{
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    ...StyleSheet.absoluteFillObject,
                }}
                onPress={() => {
                    bottomSheet$.sheet.set(undefined);
                }}
            />
        );
    };

    return (
        <BottomSheetModalProvider>
            <BottomSheetModal
                ref={ref}
                enableDynamicSizing={true}
                enablePanDownToClose={true}
                backdropComponent={renderBackdrop}
                animateOnMount={true}
                {...options}
            >
                <Show
                    if={bottomSheet$.sheet && bottomSheet$.listing}
                    else={
                        <BottomSheetView>
                            {bottomSheet$.sheet.get()}
                        </BottomSheetView>
                    }
                >
                    {bottomSheet$.sheet.get()}
                </Show>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
});

export * from './select-language';
export { AppBottomSheet };
