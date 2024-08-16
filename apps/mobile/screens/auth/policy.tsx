import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { i18n } from '@instagram/configs';
import type { ScreenProps } from '@instagram/types';
import { Text } from 'dripsy';
import { ScrollView } from 'dripsy';

const PolicyScreen = ({ navigation }: ScreenProps<'PolicyScreen'>) => {
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
					{i18n.t('auth.agree_to_policy')}
				</Text>

				<Text
					sx={{
						lineHeight: 20,
						fontWeight: 'medium',
					}}
				>
					{i18n.t('auth.people_use_service_may_have_uploaded')}

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
							color: 'primary700',
						}}
					>
						{i18n.t('common.learn_more')}
					</Text>
				</Text>

				<Text
					sx={{
						lineHeight: 20,
						fontWeight: 'medium',
					}}
				>
					{i18n.t('auth.by_tapping')}

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'bold',
						}}
					>
						{' '}
						{i18n.t('auth.i_agree')}
					</Text>

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
						}}
					>
						{i18n.t('auth.you_agree_to_create_account')}
						<Text
							sx={{
								lineHeight: 20,
								fontWeight: 'medium',
								color: 'primary700',
							}}
						>
							{' '}
							{i18n.t('auth.terms')}{' '}
						</Text>
						,
						<Text
							sx={{
								lineHeight: 20,
								fontWeight: 'medium',
								color: 'primary700',
							}}
						>
							{' '}
							{i18n.t('auth.privacy_policy')}
						</Text>
						<Text
							sx={{
								lineHeight: 20,
								fontWeight: 'medium',
							}}
						>
							{' '}
							{i18n.t('common.and')}{' '}
						</Text>
						<Text
							sx={{
								lineHeight: 20,
								fontWeight: 'medium',
								color: 'primary700',
							}}
						>
							{i18n.t('auth.cookies_policy')}
						</Text>
						.
					</Text>
				</Text>

				<Text
					sx={{
						lineHeight: 20,
						fontWeight: 'medium',
					}}
				>
					{i18n.t('common.the')}

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
							color: 'primary700',
						}}
					>
						{' '}
						{i18n.t('auth.privacy_policy')}{' '}
					</Text>

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
						}}
					>
						{i18n.t('auth.privacy_policy_describe')}
					</Text>
				</Text>

				<Button
					content={i18n.t('auth.i_agree')}
					sx={{
						mt: 'md',
					}}
					fullWidth={true}
					onPress={() => {
						navigation.navigate('AvatarScreen');
					}}
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

export { PolicyScreen };
