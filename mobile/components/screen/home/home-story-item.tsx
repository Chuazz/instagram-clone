import { User } from '@/components/ui/user';
import { UserAvatar } from '@/components/ui/user/user-avatar';
import { UserName } from '@/components/ui/user/user-name';
import { Post } from '@/types/data/post';
import React from 'react';

const HomeStoryItem = ({ data }: { data: Post }) => {
    return (
        <User
            data={data.user_created}
            sx={{
                alignItems: 'center',
                gap: 4,
            }}
        >
            <UserAvatar size={80} />

            <UserName />
        </User>
    );
};

export { HomeStoryItem };
