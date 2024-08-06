import { Button } from '@/components/form/button';
import { i18n } from '@/configs/i18n';
import { View } from 'dripsy';
import { Image } from '../image';

const PostTopRightAction = () => {
    return (
        <View
            sx={{
                flexDirection: 'row',
                gap: 'sm',
                alignItems: 'center',
            }}
        >
            <Button
                size='sm'
                schema='gray'
                rounded={false}
                content={i18n.t('common.follow')}
            />

            <Button variant='transparent'>
                <Image
                    source='MoreOutlineIcon'
                    sx={{
                        width: 'icon-md',
                        height: 'icon-md',
                    }}
                />
            </Button>
        </View>
    );
};

export { PostTopRightAction };
