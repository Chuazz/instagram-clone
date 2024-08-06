import { View } from 'dripsy';
import { Image } from './image';
import { User } from '@/types/data/user';

const Avatar = ({
    user,
    size,
    borderSize = size + 12,
}: {
    user?: User;
    size: number;
    borderSize?: number;
}) => {
    return (
        <View
            sx={{
                width: borderSize,
                height: borderSize,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Image
                source='StoryBorderIcon'
                sx={{
                    position: 'absolute',
                    width: borderSize,
                    height: borderSize,
                }}
            />

            <Image
                fromServer={true}
                source={user?.avatar}
                placeholder={
                    user?.gender === 'male' ? 'MaleIcon' : 'FemaleIcon'
                }
                sx={{
                    borderRadius: 'full',
                    width: size,
                    height: size,
                }}
            />
        </View>
    );
};

export { Avatar };
