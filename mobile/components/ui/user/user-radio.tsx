import { Button } from '@/components/form/button';
import { useUser } from './user';
import { useDripsyTheme } from 'dripsy';
import { observer } from '@legendapp/state/react';
import { Observable } from '@legendapp/state';
import { User } from '@/types/data/user';

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
                    user?.data.checked.get()
                        ? 'CircleCheckFillIcon'
                        : 'CircleOutlineIcon'
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
