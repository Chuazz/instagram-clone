import { i18n } from '@/configs/i18n';
import { TextInput, useDripsyTheme, View } from 'dripsy';
import { Image } from '../ui/image';

type SearchProps = {
    onChange: (_value: string) => void;
};

const Search = ({ onChange }: SearchProps) => {
    const { theme } = useDripsyTheme();

    return (
        <View
            sx={{
                flexDirection: 'row',
                alignItems: 'center',
                gap: 'md',
                paddingHorizontal: 'lg',
                borderRadius: 'sm',
                backgroundColor: 'gray100',
                width: 'full',
            }}
        >
            <Image
                source='SearchOutlineIcon'
                sx={{
                    width: 'icon-sm',
                    height: 'icon-sm',
                    tintColor: theme.colors.gray600,
                }}
            />

            <TextInput
                placeholder={i18n.t('common.search')}
                placeholderTextColor={theme.colors.gray600}
                sx={{
                    flex: 1,
                    paddingVertical: 'sm',
                }}
                onChangeText={onChange}
            />
        </View>
    );
};

export { Search };
