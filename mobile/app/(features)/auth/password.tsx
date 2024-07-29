import { Screen } from '@/components/layout';
import { Button, Input } from '@/components/ui';
import { i18n } from '@/configs';
import { useNavigation } from '@/hooks';
import { register$ } from '@/store/register';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const PasswordScreen = () => {
    const navigation = useNavigation();

    const { control, handleSubmit } = useForm({
        defaultValues: {
            password: '123456',
        },
        resolver: zodResolver(
            z.object({
                password: z.string().min(
                    6,
                    i18n.t('validate.at_least.letter', {
                        number: 6,
                    }),
                ),
            }),
        ),
    });

    const onSubmit = (data: { password: string }) => {
        register$.password.set(data.password);

        navigation.navigate('(features)/auth/password');
    };

    return (
        <Screen backgroundImage='BackgroundGradientImage'>
            <Screen.Header />

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
                    {i18n.t('auth.create_password')}
                </Text>

                <Text
                    sx={{
                        lineHeight: 20,
                        fontWeight: 'medium',
                    }}
                >
                    {i18n.t('auth.create_password_with_regex')}
                </Text>

                <Controller
                    control={control}
                    name='password'
                    render={({ field, fieldState }) => (
                        <Input
                            placeholder={i18n.t('auth.password')}
                            value={field.value}
                            autoFocus={true}
                            errMessage={fieldState.error?.message}
                            type='password'
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
            </ScrollView>

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
        </Screen>
    );
};

export default PasswordScreen;
