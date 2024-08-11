import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { i18n } from '@/configs/i18n';
import { register$ } from '@/store/register';
import { ScreenProps } from '@/types/route';
import { zodResolver } from '@hookform/resolvers/zod';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const NameScreen = ({ navigation }: ScreenProps<'NameScreen'>) => {
    //? TODO: Update validate message
    const { control, handleSubmit } = useForm({
        defaultValues: {
            name: __DEV__ ? 'chuazz' : '',
        },
        resolver: zodResolver(
            z.object({
                name: z.string().min(1, i18n.t('validate.invalid_email')),
            }),
        ),
    });

    //? TODO: Check email exists
    const onSubmit = (data: { name: string }) => {
        register$.name.set(data.name);

        navigation.navigate('UserNameScreen');
    };

    return (
        <Screen
            backgroundImage='BackgroundGradientImage'
            navigation={navigation}
        >
            <ScreenHeader />

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
                    name='name'
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
                        width: 'full',
                    }}
                    onPress={handleSubmit(onSubmit)}
                />
            </ScrollView>

            <ScreenFooter>
                <Button
                    size='sm'
                    variant='transparent'
                    content={i18n.t('auth.already_have_account')}
                    onPress={() => {
                        navigation.goBack();
                    }}
                />
            </ScreenFooter>
        </Screen>
    );
};

export { NameScreen };
