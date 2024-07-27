import { i18n } from '@/configs';
import { Entypo } from '@expo/vector-icons';
import { Button, View } from 'tamagui';

const PostTopRightAction = () => {
    return (
        <View
            flexDirection="row"
            gap={8}
        >
            <Button
                px={12}
                height={36}
            >
                {i18n.t('common.follow')}
            </Button>

            <Button
                variant="outlined"
                borderWidth={0}
                height={36}
                px={8}
            >
                <Entypo
                    name="dots-three-vertical"
                    size={16}
                />
            </Button>
        </View>
    );
};

export { PostTopRightAction };
