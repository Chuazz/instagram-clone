import { ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SxProp, View } from 'dripsy';
import { ScreenFooter } from './screen-footer';
import { ScreenHeader } from './screen-header';
import { Image } from '../ui';
import { StyleSheet } from 'react-native';
import { image } from '@/configs';

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
