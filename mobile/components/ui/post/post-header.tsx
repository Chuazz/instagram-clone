import { View } from 'dripsy';
import { PostUser } from './post-user';
import { PostTopRightAction } from './post-top-right-action';

const PostHeader = () => {
    return (
        <View
            sx={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                px: 'md',
            }}
        >
            <PostUser />

            <PostTopRightAction />
        </View>
    );
};

export { PostHeader };
