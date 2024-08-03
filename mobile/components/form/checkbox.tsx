import { OptionType } from '@/types/common';
import { Image } from '../ui/image';
import { Button } from './button';

type CheckBoxProps = {
    data: OptionType;
    value: string;
    checkedColor?: string;
    unCheckColor?: string;
    onChange?: () => void;
};

const CheckBox = ({
    data,
    value,
    onChange,
    checkedColor = '#0073ff',
    unCheckColor = '#989898',
}: CheckBoxProps) => {
    return (
        <Button
            variant='transparent'
            onPress={() => {
                onChange?.();
            }}
        >
            <Image
                source={data.code === value ? 'CheckBoxIcon' : 'UnCheckBoxIcon'}
                sx={{
                    size: 20,
                    width: 20,
                }}
                tintColor={data.code === value ? checkedColor : unCheckColor}
            />
        </Button>
    );
};

export { CheckBox };
