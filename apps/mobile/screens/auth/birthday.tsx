import { Button } from '@/components/form/button';
import { DatePicker } from '@/components/form/date-picker';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { i18n } from '@instagram/configs';
import { register$ } from '@instagram/stores';
import type { ScreenProps } from '@/types/routes';
import { observer } from '@legendapp/state/react';
import { differenceInYears } from 'date-fns';
import { ScrollView, Text } from 'dripsy';

const BirthDayScreen = observer(
	({ navigation }: ScreenProps<'BirthDayScreen'>) => {
		const onSubmit = () => {};

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
						{i18n.t('auth.what_your_birthday')}
					</Text>

					<Text
						sx={{
							lineHeight: 20,
							fontWeight: 'medium',
						}}
					>
						{i18n.t('auth.use_your_own_birthday')}{' '}
						<Text
							sx={{
								color: 'primary800',
							}}
							onPress={() => {}}
						>
							{i18n.t('auth.why_provide_birthday')}
						</Text>
					</Text>

					<DatePicker
						value={new Date(register$.birth.get())}
						show={true}
						display='spinner'
						placeholder={`${i18n.t('auth.birthday')} (${i18n.t('auth.age', {
							age: differenceInYears(
								new Date(),
								new Date(register$.birth.get()),
							),
						})})`}
						onChange={(_e, date) => {
							if (date?.toDateString()) {
								register$.birth.set(date?.toDateString());
							}
						}}
					/>

					<Button
						content={i18n.t('common.next')}
						sx={{
							mt: 'sm',
						}}
						fullWidth={true}
						onPress={onSubmit}
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
	},
);

export { BirthDayScreen };
