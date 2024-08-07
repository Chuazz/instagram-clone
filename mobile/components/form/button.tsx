import { ActivityIndicator, SxProp, Text, useDripsyTheme, useSx } from 'dripsy';
import { ReactNode, useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withSpring,
} from 'react-native-reanimated';

type ButtonProps = {
    content?: string;
    children?: ReactNode;
    sx?: SxProp;
    textSx?: SxProp;
    indicatorColor?: string;
    size?: 'sm' | 'md' | 'lg';
    schema?: 'primary' | 'gray' | 'white';
    center?: boolean;
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
    textSx,
    indicatorColor,
    loading = false,
    size = 'md',
    rounded = true,
    schema = 'primary',
    variant = 'fill',
    center = true,
    disable,
    onPress,
}: ButtonProps) => {
    const sxProps = useSx();
    const { theme } = useDripsyTheme();
    const primary = theme.colors.primary700;
    const gray = theme.colors.gray100;
    const scale = useSharedValue(1);

    const viewAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                scale: scale.value,
            },
        ],
    }));

    const styles = (() => {
        let indicatorColor = '';

        const button: SxProp = {
            borderRadius: 'md',
            paddingVertical: size,
            borderWidth: 1,
            borderColor: 'transparent',
            alignSelf: center ? 'flex-center' : 'flex-start',
        };

        const text: SxProp = {
            fontWeight: 'bold',
            textAlign: 'center',
            fontSize: size,
            paddingHorizontal: 12,
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

    const tapGesture = useMemo(
        () =>
            Gesture.Tap()
                .onTouchesDown(() => {
                    scale.value = withSpring(0.9);
                })
                .onTouchesUp(() => {
                    scale.value = withSpring(1);

                    onPress?.();
                })
                .runOnJS(true),
        [],
    );

    return (
        <GestureDetector gesture={tapGesture}>
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
        </GestureDetector>
    );
};

export { Button };
