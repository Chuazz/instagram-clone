import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SxProp, View } from 'dripsy';
import { ScreenFooter } from './screen-footer';
import { ScreenHeader } from './screen-header';
import { StyleSheet } from 'react-native';
import type { image } from '@/configs/image';
import { Image } from '../ui/image';

type ScreenProps = {
    children: ReactNode;
    sx?: SxProp;
    backgroundImage?: keyof typeof image;
};

const Screen = ({ children, sx, backgroundImage }: ScreenProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View
            sx={{
                backgroundColor: 'white',
                marginTop: insets.top,
                flexGrow: 1,
                ...sx,
            }}
        >
            {backgroundImage && (
                <Image
                    source={backgroundImage}
                    sx={{
                        width: 'screenWidth',
                        height: 'screenHeight',
                        ...StyleSheet.absoluteFillObject,
                    }}
                />
            )}

            {children}
        </View>
    );
};

Screen.Footer = ScreenFooter;
Screen.Header = ScreenHeader;

export { Screen };
