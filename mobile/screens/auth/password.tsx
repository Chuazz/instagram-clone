import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { i18n } from '@/configs/i18n';
import { register$ } from '@/store/register';
import { ScreenProps } from '@/types/route-params';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const PasswordScreen = ({ navigation }: ScreenProps<'PasswordScreen'>) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            password: __DEV__ ? '123456' : '',
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

        navigation.navigate('SaveLoginScreen');
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

export { PasswordScreen };
