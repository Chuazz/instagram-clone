import { i18n } from '@/configs/i18n';
import { SCREEN_HEIGHT } from '@/configs/theme';
import { BottomSheetStackParamsList } from '@/types/bottom-sheet';
import { observer, Show } from '@legendapp/state/react';
import { ScrollView, Text, View } from 'dripsy';
import { StyleSheet } from 'react-native';
import { Button } from '../form/button';
import { LoadingOverlay } from '../layout/loading-overlay';
import { Image } from '../ui/image';

const MediaPicker = observer(
    ({ closeSheet, openSheet }: BottomSheetStackParamsList['MediaPicker']) => {
        const pickImage = async () => {
            openSheet({
                name: 'MediaLibrary',
            });
        };

        return (
            <>
                <Show if={false}>
                    <LoadingOverlay />
                </Show>

                <Image
                    source='BackgroundGradientImage'
                    sx={{
                        width: 'full',
                        height: 'full',
                        ...StyleSheet.absoluteFillObject,
                    }}
                />

                <View
                    sx={{
                        height: SCREEN_HEIGHT - SCREEN_HEIGHT * 0.3,
                    }}
                >
                    <View
                        sx={{
                            gap: 'sm',
                            px: 'md',
                            pb: 'lg',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Text
                            sx={{
                                fontSize: 'xl',
                                fontWeight: 'bold',
                                flex: 1,
                            }}
                        >
                            {i18n.t('common.add_image')}
                        </Text>

                        <Button
                            variant='transparent'
                            onPress={() => {
                                closeSheet?.();
                            }}
                        >
                            <Image
                                source='CloseOutlineIcon'
                                sx={{
                                    width: 'icon-lg',
                                    height: 'icon-lg',
                                }}
                            />
                        </Button>
                    </View>

                    <ScrollView>
                        <View
                            sx={{
                                borderRadius: 'md',
                                mx: 'md',
                                mb: 'sm',
                                backgroundColor: 'white',
                                elevation: 2,
                            }}
                        >
                            <Button
                                content={i18n.t('common.select_from_gallery')}
                                rounded={false}
                                schema='white'
                                contentSx={{
                                    textAlign: 'left',
                                    fontWeight: 'semibold',
                                    fontSize: 'lg',
                                }}
                                onPress={pickImage}
                            />

                            <Button
                                content={i18n.t('common.take_picture')}
                                rounded={false}
                                schema='white'
                                contentSx={{
                                    textAlign: 'left',
                                    fontWeight: 'semibold',
                                    fontSize: 'lg',
                                }}
                            />
                        </View>
                    </ScrollView>
                </View>
            </>
        );
    },
);

export { MediaPicker };
