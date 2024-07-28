import { SxProp, Text, useDripsyTheme, useSx } from 'dripsy';
import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
    content?: string;
    children?: ReactNode;
    sx?: SxProp;
    textSx?: SxProp;
    size?: 'sm' | 'md' | 'lg';
    schema?: 'primary' | 'gray';
    rounded?: boolean;
    variant?: 'fill' | 'outline' | 'transparent';
};

const Button = ({
    children,
    content,
    sx,
    textSx,
    size = 'md',
    rounded = true,
    schema = 'primary',
    variant = 'fill',
    ...props
}: ButtonProps) => {
    const sxProps = useSx();
    const { theme } = useDripsyTheme();

    const primary = theme.colors.primary700;
    const gray = theme.colors.gray300;

    const styles = (() => {
        const button: SxProp = {
            borderRadius: 'md',
            padding: size,
            borderWidth: 1,
            borderColor: 'transparent',
        };

        const text: SxProp = {
            fontWeight: 'semibold',
            textAlign: 'center',
            fontSize: size,
        };

        if (schema === 'primary') {
            button.backgroundColor = primary;

            text.color = 'white';

            if (variant === 'outline') {
                button.borderColor = primary;

                text.color = primary;
            }

            if (variant === 'transparent') {
                text.color = primary;
            }
        }

        if (schema === 'gray') {
            button.backgroundColor = gray;
            text.color = 'white';

            if (variant === 'outline') {
                button.borderColor = gray;

                text.color = 'gray700';
            }

            if (variant === 'transparent') {
                text.color = 'gray700';
            }
        }

        if (rounded) {
            button.borderRadius = 'full';
        }

        if (variant === 'outline') {
            button.backgroundColor = 'transparent';
        }

        if (variant === 'transparent') {
            button.backgroundColor = 'transparent';
            button.padding = 0;
        }

        return {
            button,
            text,
        };
    })();

    return (
        <TouchableOpacity
            activeOpacity={0.5}
            style={sxProps({
                ...styles.button,
                ...sx,
            })}
            {...props}
        >
            {children ? (
                children
            ) : (
                <Text
                    sx={{
                        ...styles.text,
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
