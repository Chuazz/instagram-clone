import { View } from 'dripsy';
import { PostUser } from './post-user';
import { PostTopRightAction } from './post-top-right-action';
import { SPACING } from '@/configs';

const PostHeader = () => {
    return (
        <View
            flexDirection='row'
            justifyContent='space-between'
            alignItems='center'
            px={SPACING}
        >
            <PostUser />

            <PostTopRightAction />
        </View>
    );
};

export { PostHeader };
