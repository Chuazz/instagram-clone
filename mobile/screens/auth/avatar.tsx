import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { Image } from '@/components/ui/image';
import { i18n } from '@/configs/i18n';
import { bottomSheet$ } from '@/store/bottom-sheet';
import { ScreenProps } from '@/types/route';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { ScrollView, Text, View } from 'dripsy';

const AvatarScreen = ({ navigation }: ScreenProps<'AvatarScreen'>) => {
    const onSubmit = () => {
        navigation.navigate('PolicyScreen');
    };

    return (
        <Screen backgroundImage='BackgroundGradientImage'>
            <Screen.Header canGoBack={false} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
                contentContainerSx={{
                    flexGrow: 1,
                    paddingHorizontal: 'md',
                    gap: 'md',
                }}
            >
                <Text
                    sx={{
                        fontSize: 'xl',
                        fontWeight: 'bold',
                    }}
                >
                    {i18n.t('auth.add_your_avatar')}
                </Text>

                <Text
                    sx={{
                        lineHeight: 20,
                        fontWeight: 'medium',
                    }}
                >
                    {i18n.t('auth.add_avatar_to')}
                </Text>

                <View
                    sx={{
                        alignItems: 'center',
                    }}
                >
                    <Image
                        source='UserCircleFillIcon'
                        sx={{
                            width: 300,
                            height: 300,
                        }}
                    />
                </View>
            </ScrollView>

            <Screen.Footer
                sx={{
                    flexDirection: 'column',
                }}
            >
                <Button
                    content={i18n.t('common.add_image')}
                    sx={{
                        mt: 'sm',
                        width: 'full',
                    }}
                    onPress={() =>
                        bottomSheet$.openSheet({
                            name: 'ImagePicker',
                        })
                    }
                />

                <Button
                    content={i18n.t('common.skip')}
                    schema='gray'
                    variant='outline'
                    sx={{
                        mt: 'sm',
                        width: 'full',
                    }}
                    onPress={onSubmit}
                />
            </Screen.Footer>
        </Screen>
    );
};

export { AvatarScreen };
