import { Screen } from '@/components/layout';
import { Button, Image, Input } from '@/components/ui';
import { i18n } from '@/configs';
import { useNavigation } from '@/hooks';
import { FontAwesome6 } from '@expo/vector-icons';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const AccountPage = () => {
    const navigation = useNavigation();

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm<{ account: string }>({
        defaultValues: {
            account: '',
        },
        resolver: zodResolver(
            z.object({
                account: z.string().min(1).email(),
            }),
        ),
    });

    console.log(errors);

    const onSubmit = (data: { account: string }) => console.log(data);

    return (
        <Screen>
            <ScrollView
                showsVerticalScrollIndicator={false}
                keyboardShouldPersistTaps='handled'
                contentContainerSx={{
                    flexGrow: 1,
                    padding: 'md',
                    gap: 'md',
                }}
            >
                <Image
                    source='LoginBackgroundImage'
                    sx={{
                        width: 'screenWidth',
                        height: 'screenHeight',
                        ...StyleSheet.absoluteFillObject,
                    }}
                />

                <Button
                    variant='transparent'
                    center={false}
                    onPress={() => {
                        navigation.goBack();
                    }}
                >
                    <FontAwesome6
                        name='arrow-left-long'
                        size={18}
                        color='black'
                    />
                </Button>

                <Text
                    sx={{
                        fontSize: 'xl',
                        fontWeight: 'bold',
                    }}
                >
                    {i18n.t('auth.what_your_email')}
                </Text>

                <Text
                    sx={{
                        lineHeight: 20,
                        fontWeight: 'medium',
                    }}
                >
                    {i18n.t('auth.enter_the_email_to_contact')}
                </Text>

                <Controller
                    control={control}
                    name='account'
                    render={({ field, fieldState }) => (
                        <Input
                            placeholder={i18n.t('auth.email')}
                            value={field.value}
                            errMessage={fieldState.error?.message}
                            onChangeText={field.onChange}
                        />
                    )}
                />

                <Button
                    content={i18n.t('common.next')}
                    sx={{
                        mt: 'sm',
                    }}
                    onPress={handleSubmit(onSubmit)}
                />

                <Button
                    content={i18n.t('auth.sign_up_with_mobile')}
                    schema='gray'
                    variant='outline'
                />

                <Screen.Footer>
                    <Button
                        size='sm'
                        variant='transparent'
                        content={i18n.t('auth.already_have_account')}
                        onPress={() => {
                            navigation.goBack();
                        }}
                    />
                </Screen.Footer>
            </ScrollView>
        </Screen>
    );
};

export default AccountPage;
