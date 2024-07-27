import { View } from 'dripsy';
import { Image } from './image';

const Avatar = ({ uri, size, borderSize = size + 12 }: { uri?: string; size: number; borderSize?: number }) => {
    return (
        <View
            width={borderSize}
            height={borderSize}
            justifyContent='center'
            alignItems='center'
        >
            <Image
                source='StoryBorderIcon'
                width={borderSize}
                height={borderSize}
                position='absolute'
            />

            <Image
                fromServer={true}
                source={uri!}
                width={size}
                height={size}
                borderRadius={9999}
            />
        </View>
    );
};

export { Avatar };
