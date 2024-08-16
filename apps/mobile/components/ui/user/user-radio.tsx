import { Button } from '@/components/form/button';
import type { User } from '@instagram/types/data';
import type { Observable } from '@legendapp/state';
import { observer } from '@legendapp/state/react';
import { useDripsyTheme } from 'dripsy';
import { useUser } from './user';

const UserRadio = observer(
	({ onPress }: { onPress: (_data: Observable<User>) => void }) => {
		const user = useUser();
		const { theme } = useDripsyTheme();

		return (
			<Button
				variant='transparent'
				leftIconSx={{
					tintColor: user?.data.checked.get()
						? theme.colors.primary700
						: theme.colors.gray500,
				}}
				leftIcon={
					user?.data.checked.get() ? 'CircleCheckFillIcon' : 'CircleOutlineIcon'
				}
				onPress={() => {
					if (user?.data) {
						onPress(user?.data);
					}
				}}
			/>
		);
	},
);

export { UserRadio };
