import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { i18n } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@instagram/types';
import { ScrollView, Text } from 'dripsy';

const SaveLoginScreen = ({ navigation }: ScreenProps<'SaveLoginScreen'>) => {
	const onConfirm = (save: boolean) => {
		register$.saveInfo.set(save);

		navigation.navigate('BirthDayScreen');
	};

	return (
		<Screen backgroundImage='BackgroundGradientImage' navigation={navigation}>
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
					{i18n.t('auth.save_login_info')}
				</Text>

				<Text
					sx={{
						lineHeight: 20,
						fontWeight: 'medium',
						mb: 'sm',
					}}
				>
					{i18n.t('auth.wont_need_enter_info')}
				</Text>

				<Button
					content={i18n.t('common.next')}
					fullWidth={true}
					onPress={() => onConfirm(true)}
				/>

				<Button
					variant='outline'
					schema='gray'
					content={i18n.t('common.not_now')}
					fullWidth={true}
					onPress={() => onConfirm(false)}
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

export { SaveLoginScreen };
