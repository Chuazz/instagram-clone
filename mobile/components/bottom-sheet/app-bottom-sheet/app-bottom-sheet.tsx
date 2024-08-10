import { bottomSheet$ } from '@/store/bottom-sheet';
import { observer } from '@legendapp/state/react';
import { SheetItem } from './sheet-item';

const AppBottomSheet = observer(() => {
    return bottomSheet$.sheets.map((sheet, index) => (
        <SheetItem
            key={sheet.name.get()}
            data={sheet.get()}
            index={index}
        />
    ));
});

export { AppBottomSheet };
