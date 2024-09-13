import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { Image } from '@/components/ui/image';
import { bottomSheet$ } from '@/stores/bottom-sheet';
import type { ScreenProps } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { LANGUAGES, i18n } from '@instagram/configs';
import { useLogin } from '@instagram/hooks/mutation';
import { app$ } from '@instagram/stores';
import type { LoginType } from '@instagram/types';
import { observer } from '@legendapp/state/react';
import { ScrollView, View } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const LogInScreen = observer(({ navigation }: ScreenProps<'LogInScreen'>) => {
	const loginMutate = useLogin();

	const { control, handleSubmit } = useForm<LoginType>({
		defaultValues: {
			account: __DEV__ ? 'sonnv1912@gmail.com' : '',
			password: __DEV__ ? '11111111' : '',
		},
		resolver: zodResolver(
			z.object({
				account: z
					.string()
					.min(1, i18n.t('validate.invalid_email'))
					.email(i18n.t('validate.invalid_email')),
				password: z.string().min(1, i18n.t('validate.require')),
			}),
		),
	});

	const onSubmit = (data: LoginType) => {
		loginMutate.mutate(data, {
			onSuccess() {
				navigation.navigate('MainTab', {
					screen: 'home',
				});
			},
		});
	};

	return (
		<Screen
			backgroundImage='BackgroundGradientImage'
			navigation={navigation}
		>
			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerSx={{
					justifyContent: 'space-between',
					flexGrow: 1,
					p: 'md',
					alignItems: 'center',
				}}
				keyboardShouldPersistTaps='handled'
			>
				<Button
					size='sm'
					schema='gray'
					variant='transparent'
					content={LANGUAGES[app$.locale.get()].label}
					onPress={() => {
						bottomSheet$.openSheet({
							name: 'SelectLanguage',
						});
					}}
				/>

				<Image
					source='AppLogoIcon'
					sx={{
						width: 60,
						height: 60,
					}}
				/>

				<View
					sx={{
						width: 'full',
						gap: 'md',
					}}
				>
					<Controller
						control={control}
						name='account'
						render={({ field, fieldState }) => (
							<Input
								placeholder={i18n.t('auth.name_email_number')}
								value={field.value}
								errMessage={fieldState.error?.message}
								onChangeText={field.onChange}
							/>
						)}
					/>

					<Controller
						control={control}
						name='password'
						render={({ field, fieldState }) => (
							<Input
								placeholder={i18n.t('auth.password')}
								value={field.value}
								type='password'
								errMessage={fieldState.error?.message}
								onChangeText={field.onChange}
							/>
						)}
					/>

					<Button
						content={i18n.t('auth.log_in')}
						fullWidth={true}
						loading={loginMutate.isPending}
						onPress={handleSubmit(onSubmit)}
					/>

					<Button
						variant='transparent'
						schema='gray'
						content={i18n.t('auth.forgot_password')}
						fullWidth={true}
						onPress={() => {}}
					/>
				</View>

				<Button
					content={i18n.t('auth.create_new_account')}
					variant='outline'
					fullWidth={true}
					onPress={() => {
						navigation.navigate('AccountScreen');
					}}
				/>
			</ScrollView>
		</Screen>
	);
});

export { LogInScreen };
