import { BUTTON_MD_SIZE } from '@/configs';
import { SxProp, Text, useSx } from 'dripsy';
import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
    content?: string;
    children?: ReactNode;
    sx?: SxProp;
    textSx?: SxProp;
    size?: 'sm' | 'md' | 'lg';
};

const Button = ({ children, content, sx, size = 'md', textSx, ...props }: ButtonProps) => {
    const sxProps = useSx();

    const height = (() => {
        if (size === 'sm') {
            return 40;
        }

        return BUTTON_MD_SIZE;
    })();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={sxProps({
                height,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingHorizontal: 12,
                ...sx,
            })}
            {...props}
        >
            {children ? (
                children
            ) : (
                <Text
                    sx={{
                        fontWeight: 'semibold',
                        ...textSx,
                    }}
                >
                    {content}
                </Text>
            )}
        </TouchableOpacity>
    );
};

export { Button };
