import { Text, View } from 'dripsy';
import { usePost } from './post';
import { Avatar } from '../avatar';
import { i18n } from '@/configs/i18n';
import { observer } from '@legendapp/state/react';

const PostUser = observer(() => {
    const data = usePost()?.data.get();

    if (!data?.user_created) {
        return null;
    }

    return (
        <View
            sx={{
                flexDirection: 'row',
                gap: 'sm',
                alignItems: 'center',
            }}
        >
            <Avatar
                size={36}
                borderSize={44}
                user={data?.user_created}
            />

            <View>
                <Text
                    sx={{
                        fontWeight: 'semibold',
                    }}
                >
                    {data?.user_created.first_name}
                </Text>

                <Text>{i18n.t('post.suggested_for_you')}</Text>
            </View>
        </View>
    );
});

export { PostUser };
