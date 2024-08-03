import { Text, View } from 'dripsy';
import { usePost } from './post';
import { Avatar } from '../avatar';
import { i18n } from '@/configs/i18n';

const PostUser = () => {
    const data = usePost()?.data.get();

    return (
        <View
            sx={{
                flexDirection: 'row',
                gap: 'sm',
                alignItems: 'center',
            }}
        >
            <Avatar
                size={40}
                borderSize={48}
                uri={data?.user_created.avatar}
            />

            <View>
                <Text>
                    {data?.user_created.first_name}
                    {data?.user_created.last_name}
                </Text>

                <Text>{i18n.t('common.suggested_for_you')}</Text>
            </View>
        </View>
    );
};

export { PostUser };
