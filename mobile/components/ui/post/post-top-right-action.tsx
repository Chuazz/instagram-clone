import { Button } from '@/components/form/button';
import { i18n } from '@/configs/i18n';
import { Entypo } from '@expo/vector-icons';
import { View } from 'dripsy';

const PostTopRightAction = () => {
    return (
        <View
            sx={{
                flexDirection: 'row',
                gap: 'sm',
            }}
        >
            <Button content={i18n.t('common.follow')} />

            <Button variant='outline'>
                <Entypo
                    name='dots-three-vertical'
                    size={16}
                />
            </Button>
        </View>
    );
};

export { PostTopRightAction };
