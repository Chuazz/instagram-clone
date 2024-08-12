import { SxProp, View } from 'dripsy';
import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const ScreenFooter = ({
    children,
    sx,
}: {
    children: ReactNode;
    sx?: SxProp;
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            sx={{
                position: 'absolute',
                bottom: 0,
                width: 'screen-width',
                paddingHorizontal: 'md',
                paddingTop: 'xl',
                paddingBottom: insets.bottom + 16,
                ...sx,
            }}
        >
            {children}
        </View>
    );
};

export { ScreenFooter };
