import type { image } from '@/configs/image';
import { Show } from '@legendapp/state/react';
import {
    ActivityIndicator,
    SxProp,
    Text,
    useDripsyTheme,
    useSx,
    View,
} from 'dripsy';
import { ReactNode, useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';
import { Image } from '../ui/image';

type ButtonProps = {
    content?: string;
    children?: ReactNode;
    sx?: SxProp;
    contentSx?: SxProp;
    iconSx?: SxProp;
    leftIconSx?: SxProp;
    rightIconSx?: SxProp;
    indicatorColor?: string;
    leftIcon?: keyof typeof image;
    rightIcon?: keyof typeof image;
    size?: 'sm' | 'md' | 'lg';
    schema?: 'primary' | 'gray' | 'white' | 'black';
    rounded?: boolean;
    loading?: boolean;
    disable?: boolean;
    variant?: 'fill' | 'outline' | 'transparent';
    onPress?: () => void;
};

const Button = ({
    children,
    content,
    sx,
    contentSx,
    iconSx,
    leftIconSx,
    rightIconSx,
    indicatorColor,
    loading = false,
    size = 'md',
    rounded = true,
    schema = 'primary',
    variant = 'fill',
    leftIcon,
    rightIcon,
    disable,
    onPress,
}: ButtonProps) => {
    const sxProps = useSx();
    const { theme } = useDripsyTheme();
    const scale = useSharedValue(1);
    const primary = useMemo(() => theme.colors.primary700, []);
    const gray = useMemo(() => theme.colors.gray100, []);

    const styles = useMemo(() => {
        let indicatorColor = '';

        const button: SxProp = {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 'md',
            paddingVertical: size,
            paddingHorizontal: 'md',
            borderWidth: 2,
            borderColor: 'transparent',
            gap: 'xs',
            overflow: 'hidden',
        };

        const text: SxProp = {
            fontWeight: 'bold',
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

            text.color = 'gray900';

            indicatorColor = gray;

            if (variant === 'outline') {
                button.borderColor = 'gray200';

                text.color = 'gray700';

                indicatorColor = 'gray700';
            }

            if (variant === 'transparent') {
                text.color = 'gray700';

                indicatorColor = 'gray700';
            }
        }

        if (schema === 'white') {
            button.backgroundColor = 'white';
            text.color = 'black';

            if (variant === 'transparent') {
                text.color = 'white';
            }

            if (variant === 'outline') {
                button.borderColor = 'white';
                text.color = 'white';
            }
        }

        if (schema === 'black') {
            if (variant === 'transparent') {
                text.color = 'black';
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
            button.paddingVertical = 0;
            button.paddingHorizontal = 0;
            button.borderRadius = size;
        }

        return {
            button,
            text,
            indicatorColor,
        };
    }, [schema, variant, rounded, size]);

    const render = useMemo(() => {
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

        return (
            <>
                <Show if={leftIcon}>
                    <Image
                        source={leftIcon}
                        sx={{
                            width: `icon-${size}`,
                            height: `icon-${size}`,
                            tintColor: styles.text.color?.toString(),
                            ...iconSx,
                            ...leftIconSx,
                        }}
                    />
                </Show>

                <Show if={content}>
                    <Text
                        sx={{
                            ...styles.text,
                            ...contentSx,
                        }}
                    >
                        {content}
                    </Text>
                </Show>

                <Show if={rightIcon}>
                    <Image
                        source={rightIcon}
                        sx={{
                            width: `icon-${size}`,
                            height: `icon-${size}`,
                            tintColor: styles.text.color?.toString(),
                            ...iconSx,
                            ...rightIconSx,
                        }}
                    />
                </Show>
            </>
        );
    }, [
        content,
        leftIcon,
        rightIcon,
        children,
        schema,
        variant,
        rounded,
        size,
    ]);

    const tapGesture = useMemo(
        () =>
            Gesture.Tap()
                .onTouchesDown(() => {
                    scale.value = withSpring(0.95);
                })
                .onTouchesUp(() => {
                    scale.value = withSpring(1);

                    setTimeout(() => {
                        onPress?.();
                    }, 300);
                })
                .runOnJS(true),
        [onPress],
    );

    const viewAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: scale.value,
            },
        ],
    }));

    return (
        <GestureDetector gesture={tapGesture}>
            <View
                sx={{
                    ...sx,
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                }}
            >
                <Animated.View
                    style={[
                        sxProps({
                            ...styles.button,
                            ...sx,
                        }),
                        viewAnimatedStyle,
                    ]}
                >
                    {render}
                </Animated.View>
            </View>
        </GestureDetector>
    );
};

export { Button };
