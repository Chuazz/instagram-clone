import { Text } from 'dripsy';
import { useUser } from './user';
import { observer } from '@legendapp/state/react';

const UserNickname = observer(() => {
    const user = useUser();

    if (!user?.data.user_name.get()) {
        return null;
    }

    return (
        <Text
            sx={{
                fontWeight: 'semibold',
                color: 'gray500',
            }}
        >
            {user?.data.user_name.get()}
        </Text>
    );
});

export { UserNickname };
