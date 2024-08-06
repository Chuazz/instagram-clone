import { SxProp, Text, View } from 'dripsy';
import { ReactNode } from 'react';
import { Image } from '../ui/image';
import { HEADER_HEIGHT } from '@/configs/theme';
import { useNavigation } from '@react-navigation/native';
import { Button } from '../form/button';

type ScreenHeaderProps = {
    children?: ReactNode;
    sx?: SxProp;
    content?: string;
};

const ScreenHeader = ({ children, sx, content }: ScreenHeaderProps) => {
    const navigation = useNavigation();

    return (
        <View
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 'md',
                paddingHorizontal: 'md',
                height: HEADER_HEIGHT,
                ...sx,
            }}
        >
            {children ? (
                children
            ) : (
                <>
                    <Button
                        variant='transparent'
                        center={true}
                        sx={{
                            width: 'iconMd',
                        }}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    >
                        <Image
                            source='ArrowLeftOutlineIcon'
                            tintColor='black'
                            sx={{
                                width: 'iconMd',
                                height: 'iconMd',
                            }}
                        />
                    </Button>

                    <Text
                        numberOfLines={1}
                        sx={{
                            flex: 1,
                            fontWeight: 'semibold',
                            fontSize: 'lg',
                            textAlign: 'center',
                        }}
                    >
                        {content}
                    </Text>

                    <View
                        sx={{
                            width: 'iconMd',
                            height: 'full',
                        }}
                    />
                </>
            )}
        </View>
    );
};

export { ScreenHeader };
