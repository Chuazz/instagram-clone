import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { Image } from '@/components/ui/image';
import { i18n, LANGUAGES } from '@/configs/i18n';
import { useBottomSheet } from '@/hooks/use-bottom-sheet';
import { app$ } from '@/store/app';
import { ScreenProps } from '@/types/route';
import { observer } from '@legendapp/state/react';
import { ScrollView, Text, View } from 'dripsy';

const LogInScreen = observer(({ navigation }: ScreenProps<'LogInScreen'>) => {
    const sheet = useBottomSheet();

    return (
        <Screen backgroundImage='BackgroundGradientImage'>
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerSx={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    p: 'md',
                    alignItems: 'center',
                }}
            >
                <Button
                    size='sm'
                    schema='gray'
                    variant='transparent'
                    content={LANGUAGES[app$.locale.get()].label}
                    onPress={() => {
                        sheet.open({
                            name: 'SelectLanguage',
                            listing: true,
                            options: {
                                handleComponent: null,
                                enableDynamicSizing: false,
                                snapPoints: ['30%', '70%'],
                            },
                        });
                    }}
                />

                <Image
                    source='AppIcon'
                    sx={{
                        width: 60,
                        height: 60,
                    }}
                />

                <View
                    sx={{
                        width: 'full',
                        gap: 'md',
                    }}
                >
                    <Input placeholder={i18n.t('auth.name_email_number')} />

                    <Input placeholder={i18n.t('auth.password')} />

                    <Button
                        content={i18n.t('auth.log_in')}
                        onPress={() => {
                            navigation.navigate('HomeScreen');
                        }}
                    />

                    <Text
                        sx={{
                            textAlign: 'center',
                            fontWeight: 'semibold',
                            color: 'gray800',
                        }}
                    >
                        {i18n.t('auth.forgot_password')}
                    </Text>
                </View>

                <View
                    sx={{
                        width: 'full',
                        gap: 'md',
                        alignItems: 'center',
                    }}
                >
                    <Button
                        content={i18n.t('auth.create_new_account')}
                        variant='outline'
                        sx={{
                            width: 'full',
                        }}
                        onPress={() => {
                            navigation.navigate('AccountScreen');
                        }}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
});

export { LogInScreen };
