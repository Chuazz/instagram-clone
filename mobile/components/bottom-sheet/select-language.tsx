import { Text, View } from 'dripsy';
import { Image } from '../ui';
import { useTranslate } from '@/hooks';

const SelectLanguage = () => {
    const { t } = useTranslate();

    return (
        <View>
            <Image
                source='LoginBackgroundImage'
                sx={{
                    width: 'full',
                    height: 'full',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                }}
            />

            <Text>{t('common.select_your_language')}</Text>
        </View>
    );
};

export { SelectLanguage };
