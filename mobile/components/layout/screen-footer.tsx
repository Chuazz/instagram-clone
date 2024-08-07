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
                padding: 'md',
                paddingBottom: insets.bottom + 12,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                ...sx,
            }}
        >
            {children}
        </View>
    );
};

export { ScreenFooter };
