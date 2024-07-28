import { Screen } from '@/components/layout';
import { Button, Image, Input } from '@/components/ui';
import { i18n } from '@/configs';
import { useNavigation } from '@/hooks';
import { FontAwesome6 } from '@expo/vector-icons';
import { Text } from 'dripsy';
import { StyleSheet } from 'react-native';

const AccountPage = () => {
    const navigation = useNavigation();
    return (
        <Screen
            sx={{
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

            <Input placeholder={i18n.t('auth.email')} />

            <Button
                content={i18n.t('common.next')}
                sx={{
                    mt: 'sm',
                }}
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
        </Screen>
    );
};

export default AccountPage;
