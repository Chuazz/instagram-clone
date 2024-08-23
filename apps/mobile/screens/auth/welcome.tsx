import { Screen } from '@/components/layout/screen';
import { Image } from '@/components/ui/image';
import { i18n } from '@instagram/configs';
import { SCREEN_WIDTH } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@/types/routes';
import { observer, useEffectOnce } from '@legendapp/state/react';
import { ScrollView, Text } from 'dripsy';

const WelcomeScreen = observer(
	({ navigation }: ScreenProps<'WelcomeScreen'>) => {
		useEffectOnce(() => {
			const id = setTimeout(() => {
				navigation.navigate('FollowScreen');
			}, 3000);

			return () => clearTimeout(id);
		}, []);

		return (
			<Screen navigation={navigation} backgroundImage='BackgroundGradientImage'>
				<ScrollView
					sx={{ flexGrow: 1 }}
					showsVerticalScrollIndicator={false}
					contentContainerSx={{
						alignItems: 'center',
					}}
				>
					<Image
						source='TextLogoImage'
						sx={{
							width: 120,
							height: 35,
							mt: 'sm',
						}}
					/>

					<Image
						source={
							register$.avatar.cropped.uri.get() ||
							register$.avatar.original.uri.get()
						}
						placeholder='UserCircleFillIcon'
						sx={{
							width: 200,
							height: 200,
							borderRadius: 'full',
							mt: 120,
							tintColor:
								register$.avatar.cropped.uri.get() ||
								register$.avatar.original.uri.get()
									? undefined
									: '#ced2db',
						}}
					/>

					<Text
						sx={{
							fontSize: 'xl',
							fontWeight: 'semibold',
							mt: 80,
							textAlign: 'center',
							width: SCREEN_WIDTH - SCREEN_WIDTH * 0.3,
						}}
					>
						{i18n.t('auth.hi_welcome', {
							name: register$.userName.get(),
						})}
					</Text>

					<Text
						sx={{
							fontSize: 'md',
							fontWeight: 'semibold',
							mt: 'md',
							color: 'gray600',
							width: SCREEN_WIDTH - SCREEN_WIDTH * 0.3,
							textAlign: 'center',
						}}
					>
						{i18n.t('auth.let_custom_exp')}
					</Text>
				</ScrollView>
			</Screen>
		);
	},
);

export { WelcomeScreen };
