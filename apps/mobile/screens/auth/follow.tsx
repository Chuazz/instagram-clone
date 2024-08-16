import { Button } from '@/components/form/button';
import { Search } from '@/components/form/search';
import { Screen } from '@/components/layout/screen';
import { ScreenFooter } from '@/components/layout/screen-footer';
import { ScreenHeader } from '@/components/layout/screen-header';
import { User } from '@/components/ui/user';
import { UserAvatar } from '@/components/ui/user/user-avatar';
import { UserName } from '@/components/ui/user/user-name';
import { UserNickname } from '@/components/ui/user/user-nickname';
import { UserRadio } from '@/components/ui/user/user-radio';
import { useGetUser } from '@/hooks/use-get-user';
import { i18n } from '@instagram/configs';
import type { ScreenProps } from '@instagram/types';
import { observer } from '@legendapp/state/react';
import { ScrollView, Text, View } from 'dripsy';

const FollowScreen = observer(({ navigation }: ScreenProps<'FollowScreen'>) => {
	const userQuery = useGetUser({
		fields: ['id', 'first_name', 'avatar'],
	});

	return (
		<Screen navigation={navigation}>
			<ScreenHeader
				sx={{
					flexDirection: 'column',
					alignItems: 'flex-start',
					pt: 'sm',
				}}
			>
				<Text
					sx={{
						fontSize: 'xl',
						fontWeight: 'bold',
					}}
				>
					{i18n.t('common.follow_users', {
						amount: 5,
					})}
				</Text>

				<View
					sx={{
						width: 'screen-width',
						height: 1,
						marginHorizontal: -12,
						backgroundColor: 'gray100',
					}}
				/>

				<Search onChange={() => {}} />
			</ScreenHeader>

			<ScrollView
				showsVerticalScrollIndicator={false}
				contentContainerStyle={{ padding: 12 }}
			>
				{userQuery.data?.map((user) => (
					<User
						key={user.id}
						data={user}
						sx={{
							flexDirection: 'row',
							alignItems: 'center',
							gap: 'xs',
						}}
					>
						<UserAvatar size={50} />

						<View sx={{ flex: 1 }}>
							<UserName />

							<UserNickname />
						</View>

						<UserRadio
							onPress={(user) => {
								user.checked.set((prev) => !prev);
							}}
						/>
					</User>
				))}
			</ScrollView>

			<ScreenFooter
				sx={{
					gap: 'sm',
				}}
			>
				<View
					sx={{
						width: 'screen-width',
						height: 1,
						marginHorizontal: -12,
						backgroundColor: 'gray100',
						mb: 'md',
					}}
				/>

				<Button
					content={i18n.t('common.next')}
					rounded={false}
					fullWidth={true}
					onPress={() => {
						navigation.navigate('HomeScreen');
					}}
				/>

				<Text
					sx={{
						textAlign: 'center',
						fontSize: 'sm',
						color: 'gray500',
					}}
				>
					{i18n.t('info.follow_not_required_but')}
				</Text>
			</ScreenFooter>
		</Screen>
	);
});

export { FollowScreen };
