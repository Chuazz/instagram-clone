import { Avatar } from '@/components/ui/avatar';
import { Post } from '@/types';
import { Text, View } from 'dripsy';

const HomeStoryItem = ({ data }: { data: Post }) => {
    return (
        <View
            alignItems='center'
            gap={4}
        >
            <Avatar
                size={80}
                uri={data.user_created.avatar}
            />

            <Text>
                {data.user_created.first_name}
                {data.user_created.last_name}
            </Text>
        </View>
    );
};

export { HomeStoryItem };
