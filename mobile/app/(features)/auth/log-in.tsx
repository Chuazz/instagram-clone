import { Button, Input } from '@/components/form';
import { Screen } from '@/components/layout';
import { Image } from '@/components/ui';
import { i18n, LANGUAGES } from '@/configs';
import { useBottomSheet, useNavigation } from '@/hooks';
import { app$ } from '@/store';
import { observer } from '@legendapp/state/react';
import { ScrollView, Text, useDripsyTheme, View } from 'dripsy';

const LogInScreen = observer(() => {
    const { theme } = useDripsyTheme();
    const navigation = useNavigation();
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
                    source='AppLogoIcon'
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

                    <Button content={i18n.t('auth.log_in')} />

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
                            navigation.navigate('(features)/auth/account');
                        }}
                    />

                    <Image
                        source='ContributorImage'
                        sx={{
                            width: 55,
                            height: 18,
                            resizeMode: 'contain',
                            tintColor: theme.colors.gray700,
                        }}
                    />
                </View>
            </ScrollView>
        </Screen>
    );
});

export default LogInScreen;
