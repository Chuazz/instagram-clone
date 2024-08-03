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

const NameScreen = ({ navigation }: ScreenProps<'NameScreen'>) => {
    //? TODO: Update validate message
    const { control, handleSubmit } = useForm({
        defaultValues: {
            account: __DEV__ ? 'chuazz' : '',
        },
        resolver: zodResolver(
            z.object({
                account: z.string().min(1, i18n.t('validate.invalid_email')),
            }),
        ),
    });

    //? TODO: Check email exists
    const onSubmit = (data: { account: string }) => {
        register$.account.set(data.account);

        navigation.navigate('UserNameScreen');
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
                    {i18n.t('auth.what_your_name')}
                </Text>

                <Controller
                    control={control}
                    name='account'
                    render={({ field, fieldState }) => (
                        <Input
                            placeholder={i18n.t('auth.full_name')}
                            value={field.value}
                            autoFocus={true}
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

export { NameScreen };
