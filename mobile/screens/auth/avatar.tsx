import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { Image } from '@/components/ui/image';
import { i18n } from '@/configs/i18n';
import { bottomSheet$ } from '@/store/bottom-sheet';
import { register$ } from '@/store/register';
import { ScreenProps } from '@/types/route';
import { Memo, observer, Show } from '@legendapp/state/react';
import { ScrollView, Text, useDripsyTheme, useSx, View } from 'dripsy';
import { useModal } from 'react-native-modalfy';
import { Shadow } from 'react-native-shadow-2';

const AvatarScreen = observer(({ navigation }: ScreenProps<'AvatarScreen'>) => {
    const sx = useSx();
    const { theme } = useDripsyTheme();
    const { openModal } = useModal();

    const onSubmit = () => {
        navigation.navigate('PolicyScreen');
    };

    return (
        <Screen
            backgroundImage='BackgroundGradientImage'
            navigation={navigation}
        >
            <ScreenHeader canGoBack={false} />

            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
                contentContainerSx={{
                    flexGrow: 1,
                    paddingHorizontal: 'md',
                    gap: 'md',
                }}
            >
                <Memo>
                    <Text
                        sx={{
                            fontSize: 'xl',
                            fontWeight: 'bold',
                        }}
                    >
                        {i18n.t(
                            register$.avatar.get()
                                ? 'auth.confirm_or_change_avatar'
                                : 'auth.add_your_avatar',
                        )}
                    </Text>
                </Memo>

                <Show if={() => !register$.avatar.get()}>
                    <Text
                        sx={{
                            lineHeight: 20,
                            fontWeight: 'medium',
                        }}
                    >
                        {i18n.t('auth.add_avatar_to')}
                    </Text>
                </Show>

                <Memo>
                    <View
                        sx={{
                            alignItems: 'center',
                        }}
                    >
                        <Shadow
                            distance={16}
                            startColor={theme.colors.gray100}
                            style={sx({
                                borderRadius: 'full',
                            })}
                        >
                            <Image
                                source={register$.avatar.uri.get()}
                                placeholder='UserCircleFillIcon'
                                sx={{
                                    width: 250,
                                    height: 250,
                                    borderRadius: 'full',
                                    tintColor: register$.avatar.get()
                                        ? undefined
                                        : '#ced2db',
                                    borderWidth: 10,
                                    borderColor: 'white',
                                }}
                            />
                        </Shadow>
                    </View>

                    <Show if={register$.avatar}>
                        <Button
                            schema='gray'
                            variant='outline'
                            size='sm'
                            leftIcon='CropOutlineIcon'
                            content={i18n.t('common.edit')}
                            sx={{
                                alignSelf: 'center',
                            }}
                            onPress={() => {
                                openModal('CropImage', {
                                    width: register$.avatar.width.get(),
                                    height: register$.avatar.height.get(),
                                    uri: register$.avatar.uri.get(),
                                });
                            }}
                        />
                    </Show>
                </Memo>
            </ScrollView>

            <ScreenFooter
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
                            name: 'MediaPicker',
                            params: {
                                // onSuccess(result) {
                                //     register$.avatar.set(result[0]);
                                // },
                            },
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
            </ScreenFooter>
        </Screen>
    );
});

export { AvatarScreen };
