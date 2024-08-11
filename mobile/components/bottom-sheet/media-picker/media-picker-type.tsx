import { Button } from '@/components/form/button';
import { Image } from '@/components/ui/image';
import { i18n } from '@/configs/i18n';
import { SCREEN_HEIGHT } from '@/configs/theme';
import { ScrollView, Text, View } from 'dripsy';

type MediaPickerTypeProps = {
    onCancel: () => void;
    onPickImage: () => void;
};

const MediaPickerType = ({ onCancel, onPickImage }: MediaPickerTypeProps) => {
    return (
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
                    onPress={onCancel}
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
                        onPress={onPickImage}
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
    );
};

export { MediaPickerType };
