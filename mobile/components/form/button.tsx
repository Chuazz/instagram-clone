import { ActivityIndicator, SxProp, Text, useDripsyTheme, useSx } from 'dripsy';
import { ReactNode } from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = Omit<TouchableOpacityProps, 'style'> & {
    content?: string;
    children?: ReactNode;
    sx?: SxProp;
    textSx?: SxProp;
    indicatorColor?: string;
    size?: 'sm' | 'md' | 'lg';
    schema?: 'primary' | 'gray';
    center?: boolean;
    rounded?: boolean;
    loading?: boolean;
    variant?: 'fill' | 'outline' | 'transparent';
};

const Button = ({
    children,
    content,
    sx,
    textSx,
    indicatorColor,
    loading = false,
    size = 'md',
    rounded = true,
    schema = 'primary',
    variant = 'fill',
    center = true,
    ...props
}: ButtonProps) => {
    const sxProps = useSx();
    const { theme } = useDripsyTheme();

    const primary = theme.colors.primary700;
    const gray = theme.colors.gray200;

    const styles = (() => {
        let indicatorColor = '';

        const button: SxProp = {
            borderRadius: 'md',
            padding: size,
            borderWidth: 1,
            borderColor: 'transparent',
            alignSelf: center ? 'flex-center' : 'flex-start',
        };

        const text: SxProp = {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: size,
        };

        if (schema === 'primary') {
            button.backgroundColor = primary;

            text.color = 'white';

            indicatorColor = 'white';

            if (variant === 'outline') {
                button.borderColor = primary;

                text.color = primary;

                indicatorColor = primary;
            }

            if (variant === 'transparent') {
                text.color = primary;

                indicatorColor = primary;
            }
        }

        if (schema === 'gray') {
            button.backgroundColor = gray;

            text.color = 'white';

            indicatorColor = gray;

            if (variant === 'outline') {
                button.borderColor = gray;

                text.color = 'gray700';

                indicatorColor = 'gray700';
            }

            if (variant === 'transparent') {
                text.color = 'gray700';

                indicatorColor = 'gray700';
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
            indicatorColor,
        };
    })();

    const render = (() => {
        if (loading) {
            return (
                <ActivityIndicator
                    color={indicatorColor || styles.indicatorColor}
                />
            );
        }

        if (children) {
            return children;
        }

        return <Text sx={{ ...styles.text, ...textSx }}>{content}</Text>;
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
            {render}
        </TouchableOpacity>
    );
};

export { Button };
