import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { i18n } from '@/configs/i18n';
import { register$ } from '@/store/register';
import { ScreenProps } from '@/types/route-params';
import { ScrollView, Text } from 'dripsy';

const SaveLoginScreen = ({ navigation }: ScreenProps<'SaveLoginScreen'>) => {
    const onConfirm = (save: boolean) => {
        register$.saveInfo.set(save);

        navigation.navigate('BirthDayScreen');
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
                    {i18n.t('auth.save_login_info')}
                </Text>

                <Text
                    sx={{
                        lineHeight: 20,
                        fontWeight: 'medium',
                    }}
                >
                    {i18n.t('auth.wont_need_enter_info')}
                </Text>

                <Button
                    content={i18n.t('common.next')}
                    sx={{
                        mt: 'sm',
                    }}
                    onPress={() => onConfirm(true)}
                />

                <Button
                    variant='outline'
                    schema='gray'
                    content={i18n.t('common.not_now')}
                    onPress={() => onConfirm(false)}
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

export { SaveLoginScreen };
