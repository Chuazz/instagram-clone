import { Image } from '@/components/ui/image';
import { HEADER_HEIGHT } from '@/configs/theme';
import { View } from 'dripsy';

const HomeHeader = () => {
    return (
        <View
            sx={{
                px: 'md',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                height: HEADER_HEIGHT,
                my: 'md',
            }}
        >
            <Image
                source='TextLogoImage'
                sx={{
                    width: 120,
                    height: 'full',
                }}
            />

            <View
                sx={{
                    flexDirection: 'row',
                    gap: 16,
                    alignItems: 'center',
                }}
            >
                <Image
                    source='HeartOutlineIcon'
                    sx={{
                        width: 'icon-lg',
                        height: 'icon-lg',
                    }}
                />

                <Image
                    source='MessengerOutlineIcon'
                    sx={{
                        width: 'icon-lg',
                        height: 'icon-lg',
                    }}
                />
            </View>
        </View>
    );
};

export { HomeHeader };
