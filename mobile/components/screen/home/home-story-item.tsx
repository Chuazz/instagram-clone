import { Avatar } from '@/components/ui/avatar';
import { Post } from '@/types/data/post';
import { Text, View } from 'dripsy';
import React from 'react';

const HomeStoryItem = ({ data }: { data: Post }) => {
    return (
        <View
            sx={{
                alignItems: 'center',
                gap: 4,
            }}
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
