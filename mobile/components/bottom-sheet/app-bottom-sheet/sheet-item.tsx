import { SCREEN_HEIGHT } from '@/configs/theme';
import { bottomSheet$, SheetItemType } from '@/store/bottom-sheet';
import { useObserve } from '@legendapp/state/react';
import { useSx, View } from 'dripsy';
import { useMemo } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    useSharedValue,
    withDelay,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const MAX_HEIGHT_TO_CLOSE = 200;
const VELOCITY_Y_TO_CLOSE = 700;
const DURATION = 500;
const PAN_HEIGHT = 28;

const SheetItem = ({
    data: { content, name },
    index,
}: {
    data: SheetItemType;
    index: number;
}) => {
    const maxHeight = useSharedValue(0);
    const opacity = useSharedValue(0);
    const zIndex = useSharedValue(-1);
    const contentHeight = useSharedValue(0);
    const prevMaxHeight = useSharedValue(0);
    const sx = useSx();
    const insets = useSafeAreaInsets();

    const MAX_HEIGHT = useMemo(
        () => SCREEN_HEIGHT - insets.top - PAN_HEIGHT,
        [],
    );

    const panGesture = useMemo(
        () =>
            Gesture.Pan()
                .onStart(() => {
                    prevMaxHeight.value = Math.min(
                        contentHeight.value,
                        maxHeight.value,
                    );
                })
                .onUpdate((e) => {
                    if (
                        e.translationY > 0 &&
                        e.translationY < contentHeight.value
                    ) {
                        maxHeight.value =
                            prevMaxHeight.value - Math.abs(e.translationY);
                    }

                    if (
                        e.translationY < 0 &&
                        prevMaxHeight.value + Math.abs(e.translationY) <
                            MAX_HEIGHT
                    ) {
                        maxHeight.value =
                            prevMaxHeight.value + Math.abs(e.translationY);
                    }
                })
                .onEnd((e) => {
                    if (
                        maxHeight.value <= MAX_HEIGHT_TO_CLOSE ||
                        e.velocityY >= VELOCITY_Y_TO_CLOSE
                    ) {
                        bottomSheet$.sheets[index].visible.set(false);
                    }
                })
                .runOnJS(true),
        [],
    );

    useObserve(bottomSheet$.sheets[index].visible, (target) => {
        if (target.value) {
            opacity.value = withTiming(1);

            maxHeight.value = withTiming(MAX_HEIGHT, {
                duration: DURATION,
            });

            zIndex.value = withTiming(index + 1);

            return;
        }

        opacity.value = withTiming(0, {
            duration: DURATION,
        });

        maxHeight.value = withTiming(0);

        zIndex.value = withDelay(DURATION, withTiming(-1));

        const id = setTimeout(() => {
            bottomSheet$.sheets.splice(index, 1);
        }, DURATION);

        target.onCleanup = () => clearTimeout(id);
    });

    return (
        <Animated.View
            style={[
                {
                    zIndex,
                },
                StyleSheet.absoluteFillObject,
            ]}
        >
            <Animated.View
                style={[
                    {
                        opacity,
                    },
                    sx({
                        backgroundColor: 'blackAlpha500',
                    }),
                    StyleSheet.absoluteFillObject,
                ]}
            >
                <Pressable
                    style={{ flexGrow: 1 }}
                    onPress={() => {
                        bottomSheet$.sheets[index].visible.set(false);
                    }}
                />
            </Animated.View>

            <Animated.View
                style={[
                    {
                        maxHeight,
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'white',
                        borderRadius: 12,
                        overflow: 'hidden',
                    },
                ]}
                onLayout={(e) => {
                    contentHeight.value = e.nativeEvent.layout.height;
                }}
            >
                <View
                    sx={{
                        height: PAN_HEIGHT,
                        backgroundColor: 'transparent',
                    }}
                />

                {content}

                <GestureDetector gesture={panGesture}>
                    <View
                        sx={{
                            position: 'absolute',
                            width: 'screen-width',
                            alignItems: 'center',
                            justifyContent: 'center',
                            top: 0,
                            height: PAN_HEIGHT,
                        }}
                    >
                        <View
                            sx={{
                                width: PAN_HEIGHT,
                                height: 4,
                                borderRadius: 'full',
                                backgroundColor: 'gray400',
                            }}
                        />
                    </View>
                </GestureDetector>
            </Animated.View>
        </Animated.View>
    );
};

export { SheetItem };
