import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SxProp, View } from 'dripsy';

const Screen = ({
    children,
    backgroundColor = 'white',
    sx,
}: {
    children: ReactNode;
    backgroundColor?: string;
    sx?: SxProp;
}) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            sx={{
                backgroundColor: backgroundColor,
                marginTop: insets.top,
                flexGrow: 1,
                ...sx,
            }}
        >
            {children}
        </View>
    );
};

Screen.Footer = ({ children, sx }: { children: ReactNode; sx?: SxProp }) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            sx={{
                position: 'absolute',
                bottom: 0,
                width: 'screenWidth',
                padding: 12,
                paddingBottom: insets.bottom + 12,
                ...sx,
            }}
        >
            {children}
        </View>
    );
};

export { Screen };
