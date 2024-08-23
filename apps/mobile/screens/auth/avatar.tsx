import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { Image } from '@/components/ui/image';
import { bottomSheet$ } from '@/stores/bottom-sheet';
import { i18n } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@/types/routes';
import { Memo, Show, observer } from '@legendapp/state/react';
import { ScrollView, Text, View, useDripsyTheme, useSx } from 'dripsy';
import { useMemo } from 'react';
import { Switch } from 'react-native';
import { useModal } from 'react-native-modalfy';
import { Shadow } from 'react-native-shadow-2';

const AvatarScreen = observer(({ navigation }: ScreenProps<'AvatarScreen'>) => {
	const sx = useSx();
	const { theme } = useDripsyTheme();
	const { openModal } = useModal();

	const avatar = useMemo(() => {
		if (register$.avatar.cropped.get()) {
			return register$.avatar.cropped.get();
		}

		return register$.avatar.original.get();
	}, []);

	const onPrimaryPress = () => {
		if (avatar) {
			navigation.navigate('WelcomeScreen');

			return;
		}

		bottomSheet$.openSheet({
			name: 'MediaPicker',
			params: {
				multiple: false,
				onSelect(items) {
					if (items?.[0]) {
						register$.avatar.cropped.set(undefined);
						register$.avatar.original.set({
							uri: items?.[0]?.uri,
							height: items?.[0]?.height,
							width: items?.[0]?.width,
							type: items?.[0]?.mediaType,
						});
					}
				},
			},
		});
	};

	const onSecondaryPress = () => {
		if (avatar) {
			bottomSheet$.openSheet({
				name: 'MediaPicker',
				params: {
					multiple: false,
					onSelect(items) {
						if (items[0]) {
							register$.avatar.cropped.set(undefined);

							register$.avatar.original.set({
								uri: items[0].uri,
								height: items[0].height,
								width: items[0].width,
								type: items[0].mediaType,
							});
						}
					},
				},
			});

			return;
		}

		navigation.navigate('WelcomeScreen');
	};

	return (
		<Screen backgroundImage='BackgroundGradientImage' navigation={navigation}>
			<ScreenHeader canGoBack={false} />

			<ScrollView
				showsVerticalScrollIndicator={false}
				keyboardShouldPersistTaps='handled'
				contentContainerSx={{
					flexGrow: 1,
					paddingHorizontal: 'md',
					gap: 'md',
				}}
			>
				<Memo>
					<Text
						sx={{
							fontSize: 'xl',
							fontWeight: 'bold',
						}}
					>
						{i18n.t(
							register$.avatar.get()
								? 'auth.confirm_or_change_avatar'
								: 'auth.add_your_avatar',
						)}
					</Text>
				</Memo>

				<Show if={() => !register$.avatar.get()}>
					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
						}}
					>
						{i18n.t('auth.add_avatar_to')}
					</Text>
				</Show>

				<View
					sx={{
						alignItems: 'center',
					}}
				>
					<Shadow
						distance={16}
						startColor={theme.colors.gray100}
						style={sx({
							borderRadius: 'full',
						})}
					>
						<Image
							source={avatar?.uri}
							placeholder='UserCircleFillIcon'
							sx={{
								width: 250,
								height: 250,
								borderRadius: 'full',
								tintColor: avatar ? undefined : '#ced2db',
								borderWidth: 10,
								borderColor: 'white',
							}}
						/>
					</Shadow>
				</View>

				<Show if={register$.avatar.original}>
					<Button
						schema='gray'
						variant='outline'
						size='sm'
						leftIcon='CropOutlineIcon'
						content={i18n.t('common.edit')}
						sx={{
							alignSelf: 'center',
							mb: 'xl',
						}}
						onPress={() => {
							openModal('CropImage', {
								image: register$.avatar.original.get(),
								onSuccess(result) {
									register$.avatar.cropped.set(result);
								},
							});
						}}
					/>

					<Shadow
						style={{
							width: '100%',
							borderRadius: 8,
							padding: 12,
							backgroundColor: 'white',
						}}
						distance={16}
						startColor={theme.colors.gray100}
					>
						<View
							sx={{
								flexDirection: 'row',
								alignItems: 'center',
								gap: 'sm',
								width: 'full',
							}}
						>
							<Text sx={{ flex: 1, fontWeight: 'semibold' }}>
								{i18n.t('auth.share_as_post')}
							</Text>

							<Switch
								value={register$.shareAvatar.get()}
								thumbColor={
									register$.shareAvatar.get()
										? theme.colors.primary600
										: theme.colors.gray100
								}
								trackColor={{
									true: theme.colors.gray200,
									false: theme.colors.gray200,
								}}
								onChange={() => {
									register$.shareAvatar.set((prev) => !prev);
								}}
							/>
						</View>
					</Shadow>

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'semibold',
							color: 'gray700',
						}}
					>
						{i18n.t('auth.set_image_as_post')}
					</Text>
				</Show>
			</ScrollView>

			<ScreenFooter
				sx={{
					flexDirection: 'column',
				}}
			>
				<Button
					content={avatar ? i18n.t('common.done') : i18n.t('common.add_image')}
					sx={{
						mt: 'sm',
					}}
					fullWidth={true}
					onPress={onPrimaryPress}
				/>

				<Button
					content={
						avatar ? i18n.t('common.change_image') : i18n.t('common.skip')
					}
					schema='gray'
					variant='outline'
					fullWidth={true}
					sx={{
						mt: 'sm',
					}}
					onPress={onSecondaryPress}
				/>
			</ScreenFooter>
		</Screen>
	);
});

export { AvatarScreen };
