import { Screen } from '@/components/layout';
import { Button, Image, Input } from '@/components/ui';
import { i18n, LANGUAGES } from '@/configs';
import { useBottomSheet } from '@/hooks';
import { app$ } from '@/store';
import { observer } from '@legendapp/state/react';
import { ScrollView, Text, useDripsyTheme, View } from 'dripsy';

const LogInPage = observer(() => {
    const { theme } = useDripsyTheme();
    const sheet = useBottomSheet();

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerSx={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    p: 'md',
                    alignItems: 'center',
                }}
            >
                <Image
                    source='LoginBackgroundImage'
                    sx={{
                        width: 'screenWidth',
                        height: 'screenHeight',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                    }}
                />

                <Button
                    textSx={{
                        color: 'gray400',
                        fontSize: 'sm',
                        fontWeight: 'medium',
                    }}
                    content={`${LANGUAGES[app$.locale.get()].label} (${
                        LANGUAGES[app$.locale.get()].subLabel
                    })`}
                    onPress={() => {
                        sheet.open({
                            name: 'SelectLanguage',
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

                    <Button
                        content={i18n.t('auth.log_in')}
                        textSx={{
                            color: 'white',
                        }}
                        sx={{
                            borderRadius: 9999,
                            backgroundColor: 'primary700',
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
                        textSx={{
                            color: 'primary700',
                        }}
                        sx={{
                            borderColor: 'primary700',
                            borderWidth: 1,
                            borderRadius: 'full',
                            width: 'full',
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

export default LogInPage;
