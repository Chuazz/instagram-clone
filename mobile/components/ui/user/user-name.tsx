import { Text } from 'dripsy';
import { useUser } from './user';
import { observer } from '@legendapp/state/react';

const UserName = observer(() => {
    const user = useUser();

    return (
        <Text
            sx={{
                fontWeight: 'semibold',
            }}
        >
            {user?.data.first_name.get()}
        </Text>
    );
});

export { UserName };
