import { bottomSheet$, OpenSheetProps } from '@/store/bottom-sheet';

const useBottomSheet = () => {
    return {
        open(props: OpenSheetProps) {
            bottomSheet$.openSheet(props);
        },
        close() {
            bottomSheet$.sheet.set(undefined);
        },
    };
};

export { useBottomSheet };
