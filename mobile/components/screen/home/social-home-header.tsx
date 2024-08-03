import { Image } from '@/components/ui/image';
import { Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { View } from 'dripsy';

const SocialHomeHeader = () => {
    return (
        <View
            sx={{
                mt: 'md',
                px: 'md',
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}
        >
            <Image
                source='SocialTextLogoImage'
                width={140}
                height={40}
            />

            <View
                sx={{
                    flexDirection: 'row',
                    gap: 16,
                    alignItems: 'center',
                }}
            >
                <Ionicons
                    name='heart-outline'
                    size={30}
                />

                <FontAwesome6
                    name='facebook-messenger'
                    size={27}
                />
            </View>
        </View>
    );
};

export { SocialHomeHeader };
