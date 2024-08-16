import { Button } from '@/components/form/button';
import { Input } from '@/components/form/input';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { zodResolver } from '@hookform/resolvers/zod';
import { i18n } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@instagram/types';
import { ScrollView, Text } from 'dripsy';
import { Controller, useForm } from 'react-hook-form';
import { z } from 'zod';

const UserNameScreen = ({ navigation }: ScreenProps<'UserNameScreen'>) => {
	//? TODO: Update validate message
	const { control, handleSubmit } = useForm({
		defaultValues: {
			userName: __DEV__ ? 'chuazz' : '',
		},
		resolver: zodResolver(
			z.object({
				userName: z.string().min(1, i18n.t('validate.invalid_email')),
			}),
		),
	});

	//? TODO: Check email exists
	const onSubmit = (data: { userName: string }) => {
		register$.userName.set(data.userName);

		navigation.navigate('PolicyScreen');
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
					{i18n.t('auth.create_user_name')}
				</Text>

				<Text
					sx={{
						lineHeight: 20,
						fontWeight: 'medium',
					}}
				>
					{i18n.t('auth.add_user_name_with_suggestion')}
				</Text>

				<Controller
					control={control}
					name='userName'
					render={({ field, fieldState }) => (
						<Input
							placeholder={i18n.t('auth.user_name')}
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
					fullWidth={true}
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

export { UserNameScreen };
