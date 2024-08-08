import { SCREEN_HEIGHT } from '@/configs/theme';
import { bottomSheet$ } from '@/store/bottom-sheet';
import {
    observer,
    Show,
    useObservable,
    useObserve,
} from '@legendapp/state/react';
import { View } from 'dripsy';
import { Pressable, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useSharedValue, withTiming } from 'react-native-reanimated';

const AppBottomSheet = observer(() => {
    const maxHeight = useSharedValue(0);
    const opacity = useSharedValue(0);
    const zIndex = useSharedValue(-1);
    const contentHeight$ = useObservable(0);
    const prevMaxHeight = useSharedValue(0);

    const panGesture = Gesture.Pan()
        .onStart(() => {
            prevMaxHeight.value = Math.min(
                contentHeight$.get(),
                maxHeight.value,
            );
        })
        .onUpdate((e) => {
            if (e.translationY > 0 && e.translationY < contentHeight$.get()) {
                maxHeight.value =
                    prevMaxHeight.value - Math.abs(e.translationY);
            }

            if (e.translationY < 0) {
                maxHeight.value =
                    prevMaxHeight.value + Math.abs(e.translationY);
            }
        })
        .onEnd((e) => {
            if (maxHeight.value <= 200 || e.velocityY >= 700) {
                bottomSheet$.visible.set(false);
            }
        })
        .runOnJS(true);

    useObserve(bottomSheet$.visible, (target) => {
        if (target.value) {
            opacity.value = withTiming(1);

            maxHeight.value = withTiming(SCREEN_HEIGHT, {
                duration: 500,
            });

            zIndex.value = withTiming(99);

            return;
        }

        opacity.value = withTiming(0, {
            duration: 500,
        });

        maxHeight.value = withTiming(0);

        const id = setTimeout(() => {
            zIndex.value = -1;

            bottomSheet$.sheet.set(undefined);
        }, 600);

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
                        backgroundColor: 'rgba(0,0,0,0.4)',
                    },
                    StyleSheet.absoluteFillObject,
                ]}
            >
                <Pressable
                    style={{ flexGrow: 1 }}
                    onPress={() => {
                        bottomSheet$.visible.set(false);
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
            >
                <Show if={bottomSheet$.sheet}>
                    <View
                        onLayout={(e) => {
                            contentHeight$.set(e.nativeEvent.layout.height);
                        }}
                        sx={{
                            pt: 'xl',
                        }}
                    >
                        {bottomSheet$.sheet.get()}

                        <GestureDetector gesture={panGesture}>
                            <View
                                sx={{
                                    position: 'absolute',
                                    width: 'screen-width',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    top: 0,
                                    height: 28,
                                    // backgroundColor: 'red',
                                }}
                            >
                                <View
                                    sx={{
                                        width: 28,
                                        height: 4,
                                        borderRadius: 'full',
                                        backgroundColor: 'gray400',
                                    }}
                                />
                            </View>
                        </GestureDetector>
                    </View>
                </Show>
            </Animated.View>
        </Animated.View>
    );
});

export { AppBottomSheet };
