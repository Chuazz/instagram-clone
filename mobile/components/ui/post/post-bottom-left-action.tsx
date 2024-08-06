import { View } from 'dripsy';
import { Image } from '../image';

const PostBottomLeftAction = () => {
    return (
        <View
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 'md',
            }}
        >
            <Image
                source='HeartOutlineIcon'
                sx={{
                    width: 'icon-md',
                    height: 'icon-md',
                }}
            />

            <Image
                source='CommentOutlineIcon'
                sx={{
                    width: 'icon-md',
                    height: 'icon-md',
                }}
            />

            <Image
                source='SendOutlineIcon'
                sx={{
                    width: 'icon-md',
                    height: 'icon-md',
                }}
            />
        </View>
    );
};

export { PostBottomLeftAction };
