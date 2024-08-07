import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';
import { Image } from '@/components/ui/image';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '@/configs/theme';
import { ScreenProps } from '@/types/route';
import { useMount } from '@legendapp/state/react';
import { Text, useDripsyTheme } from 'dripsy';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';

const WelcomeScreen = ({ navigation }: ScreenProps<'WelcomeScreen'>) => {
    const imageRotate = useSharedValue(-20);
    const imageTranslateY = useSharedValue(0);
    const standOutTranslateX = useSharedValue(270);
    const withYourTranslateX = useSharedValue(270);
    const newStyleTranslateX = useSharedValue(270);
    const standOutTranslateY = useSharedValue(0);
    const withYourTranslateY = useSharedValue(0);
    const newStyleTranslateY = useSharedValue(0);
    const buttonWidth = useSharedValue(60);
    const buttonHeight = useSharedValue(60);
    const buttonOpacity = useSharedValue(0);
    const buttonTranslateY = useSharedValue(0);
    const { theme } = useDripsyTheme();

    useMount(() => {
        imageRotate.value = withTiming(0, {
            duration: 5000,
        });

        standOutTranslateX.value = withTiming(-20, {
            duration: 1000,
        });

        withYourTranslateX.value = withDelay(
            100,
            withTiming(-20, {
                duration: 1000,
            }),
        );

        newStyleTranslateX.value = withDelay(
            200,
            withTiming(-20, {
                duration: 1000,
            }),
        );

        buttonWidth.value = withTiming(SCREEN_WIDTH - 24, {
            duration: 1000,
        });

        buttonOpacity.value = withDelay(500, withTiming(1));
    });

    const imageAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                rotate: `${imageRotate.value}deg`,
            },
            {
                translateY: imageTranslateY.value,
            },
        ],
    }));

    const standOutAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: standOutTranslateX.value,
            },
            {
                translateY: standOutTranslateY.value,
            },
        ],
    }));

    const withYourAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: withYourTranslateX.value,
            },
            {
                translateY: withYourTranslateY.value,
            },
        ],
    }));

    const newStyleAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: newStyleTranslateX.value,
            },
            {
                translateY: newStyleTranslateY.value,
            },
        ],
    }));

    const buttonAnimatedStyle = useAnimatedStyle(() => ({
        transform: [
            {
                translateY: buttonTranslateY.value,
            },
        ],
    }));

    const onStart = () => {
        if (buttonWidth.value !== SCREEN_WIDTH - 24) {
            return;
        }

        imageTranslateY.value = withTiming(-SCREEN_HEIGHT, {
            duration: 1000,
        });

        standOutTranslateY.value = withDelay(
            200,
            withTiming(SCREEN_HEIGHT, {
                duration: 1000,
            }),
        );

        withYourTranslateY.value = withDelay(
            100,
            withTiming(SCREEN_HEIGHT, {
                duration: 1000,
            }),
        );

        newStyleTranslateY.value = withTiming(SCREEN_HEIGHT, {
            duration: 1000,
        });

        buttonTranslateY.value = withTiming(SCREEN_HEIGHT, {
            duration: 1000,
        });

        setTimeout(() => {
            navigation.navigate('HomeScreen');
        }, 900);
    };

    return (
        <Screen
            sx={{
                backgroundColor: 'primary800',
                justifyContent: 'center',
            }}
        >
            <Animated.View
                style={[
                    {
                        width: SCREEN_WIDTH + 200,
                        height: 370,
                        marginLeft: -120,
                    },
                    imageAnimatedStyle,
                ]}
            >
                <Image
                    source='TransparentSneaker1Image'
                    sx={{
                        width: '100%',
                        height: '100%',
                    }}
                />
            </Animated.View>

            <Animated.View
                style={[
                    standOutAnimatedStyle,
                    {
                        marginTop: 24,
                    },
                ]}
            >
                <Text
                    sx={{
                        fontWeight: '900',
                        fontSize: '4xl',
                        color: 'white',
                        textAlign: 'right',
                    }}
                >
                    STAND OUT
                </Text>
            </Animated.View>

            <Animated.View style={[withYourAnimatedStyle]}>
                <Text
                    sx={{
                        fontWeight: '900',
                        fontSize: '4xl',
                        color: 'white',
                        textAlign: 'right',
                    }}
                >
                    WITH YOUR
                </Text>
            </Animated.View>

            <Animated.View style={[newStyleAnimatedStyle]}>
                <Text
                    sx={{
                        fontWeight: '900',
                        fontSize: '4xl',
                        color: 'white',
                        textAlign: 'right',
                    }}
                >
                    NEW STYLE
                </Text>
            </Animated.View>

            <Animated.View
                style={[
                    {
                        position: 'absolute',
                        bottom: 12,
                        left: 12,
                        width: buttonWidth,
                        height: buttonHeight,
                    },
                    buttonAnimatedStyle,
                ]}
            >
                <Button
                    schema='white'
                    sx={{
                        width: '100%',
                        height: '100%',
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        paddingLeft: 24,
                    }}
                    onPress={onStart}
                >
                    <Animated.Text
                        style={{
                            fontSize: theme.fontSizes.lg,
                            fontWeight: '700',
                            opacity: buttonOpacity,
                        }}
                    >
                        GET STARTED
                    </Animated.Text>

                    <Animated.View
                        style={[
                            {
                                opacity: buttonOpacity,
                            },
                        ]}
                    >
                        <Image
                            source='ArrowUpRight'
                            sx={{
                                width: 24,
                                height: 24,
                            }}
                        />
                    </Animated.View>
                </Button>
            </Animated.View>
        </Screen>
    );
};

export { WelcomeScreen };
