import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { zodResolver } from '@hookform/resolvers/zod';
import { i18n } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@/types/routes';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';
import type { DirectusUser } from '@directus/sdk';
import { useCreateUser } from '@instagram/hooks';

const PasswordScreen = ({ navigation }: ScreenProps<'PasswordScreen'>) => {
	const createUserMutate = useCreateUser();

	const { control, handleSubmit } = useForm({
		defaultValues: {
			password: __DEV__ ? '11111111' : '',
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
		createUserMutate.mutate(
			{
				email: register$.account.get(),
				password: data.password,
			} as DirectusUser,
			{
				onSuccess() {
					register$.password.set(data.password);

					navigation.navigate('SaveLoginScreen');
				},
			},
		);
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
					fullWidth={true}
					loading={createUserMutate.isPending}
					onPress={handleSubmit(onSubmit)}
				/>
			</ScrollView>

			<ScreenFooter>
				<Button
					size='sm'
					variant='transparent'
					content={i18n.t('auth.already_have_account')}
					fullWidth={true}
					onPress={() => {
						navigation.goBack();
					}}
				/>
			</ScreenFooter>
		</Screen>
	);
};

export { PasswordScreen };
