import { Screen } from '@/components/layout';
import { Image } from '@/components/ui';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@gorhom/bottom-sheet';
import { SPACING, LANGUAGES, i18n } from 'configs';
import React from 'react';
import { app$ } from 'store/app';
import { Button, Input, ScrollView, Text, View } from 'tamagui';

const LoginPage = () => {
    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    justifyContent: 'space-between',
                    flexGrow: 1,
                    p: SPACING,
                    alignItems: 'center',
                }}
            >
                <Image
                    source="LoginBackgroundImage"
                    width={SCREEN_WIDTH}
                    height={SCREEN_HEIGHT}
                    position="absolute"
                    top={0}
                    left={0}
                    bottom={0}
                    right={0}
                />

                <Text
                    fontSize={15}
                    color="gray"
                >
                    {LANGUAGES[app$.locale.get()].label} ({LANGUAGES[app$.locale.get()].subLabel})
                </Text>

                <Image
                    source="AppLogoIcon"
                    width={55}
                    height={55}
                />

                <View
                    w="100%"
                    gap={SPACING}
                >
                    <Input placeholder={i18n.t('common.name_email_number')} />

                    <Input placeholder={i18n.t('common.password')} />

                    <Button
                        backgroundColor="$primary"
                        color="white"
                        borderRadius={9999}
                    >
                        {i18n.t('common.log_in')}
                    </Button>

                    <Text textAlign="center">{i18n.t('common.forgot_password')}</Text>
                </View>

                <View
                    width="100%"
                    gap={SPACING}
                    alignItems="center"
                >
                    <Button
                        variant="outlined"
                        borderColor="$primary"
                        borderRadius={9999}
                        color="$primary"
                        borderWidth={1}
                        width="100%"
                    >
                        {i18n.t('common.create_new_account')}
                    </Button>

                    <Image
                        source="ContributorImage"
                        width={70}
                        height={18}
                        resizeMode="contain"
                        tintColor="gray"
                    />
                </View>
            </ScrollView>
        </Screen>
    );
};

export default LoginPage;
