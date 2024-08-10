import { i18n } from '@/configs/i18n';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/configs/theme';
import { observer } from '@legendapp/state/react';
import { View } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Image as RNImage, StyleSheet } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { ModalProps } from 'react-native-modalfy';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withClamp,
    withTiming,
} from 'react-native-reanimated';
import { CropLine } from './crop-line';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/form/button';
import { Screen } from '@/components/layout/screen';

const CropImage = observer(
    ({ modal: { params, closeModal } }: ModalProps<'CropImage'>) => {
        const rotate = useSharedValue(0);
        const imageTranslateY = useSharedValue(100);
        const prevImageTranslateY = useSharedValue(0);
        const imageHeight = useSharedValue(0);

        const size = useMemo(() => {
            if (!params?.width && !params?.height && params?.uri) {
                RNImage.getSize(params?.uri, (width, height) => {
                    return { width, height };
                });
            }

            return {
                width: params?.width || SCREEN_WIDTH,
                height: params?.height || SCREEN_HEIGHT - 100,
            };
        }, [params?.uri]);

        const panGesture = useMemo(
            () =>
                Gesture.Pan()
                    .onStart(() => {
                        prevImageTranslateY.value = imageTranslateY.value;
                    })
                    .onUpdate((e) => {
                        imageTranslateY.value =
                            prevImageTranslateY.value + e.translationY;
                    })
                    .onEnd(() => {
                        imageTranslateY.value = withClamp(
                            {
                                min: 0,
                                max: imageHeight.value - 200,
                            },
                            withTiming(imageTranslateY.value),
                        );
                    })
                    .runOnJS(true),
            [imageTranslateY, prevImageTranslateY, imageHeight],
        );

        const animatedStyle = useAnimatedStyle(() => ({
            transform: [
                {
                    rotate: `${rotate.value}deg`,
                },
            ],
        }));

        const imageAnimatedStyle = useAnimatedStyle(() => ({
            transform: [
                {
                    translateY: -imageTranslateY.value,
                },
            ],
        }));

        const boxImageAnimatedStyle = useAnimatedStyle(() => ({
            transform: [
                {
                    translateY: imageTranslateY.value,
                },
            ],
        }));

        return (
            <Screen
                sx={{
                    backgroundColor: 'black',
                    width: 'screen-width',
                    gap: 8,
                }}
            >
                <StatusBar backgroundColor='black' />

                <View
                    sx={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        p: 'md',
                    }}
                >
                    <Button
                        variant='transparent'
                        schema='white'
                        content={i18n.t('common.cancel')}
                        onPress={closeModal}
                    />

                    <Button
                        variant='transparent'
                        schema='white'
                        content={i18n.t('common.done')}
                        onPress={closeModal}
                    />
                </View>

                <View
                    sx={{
                        flexGrow: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Animated.View
                        style={[
                            {
                                width: SCREEN_WIDTH,
                                overflow: 'hidden',
                            },
                            animatedStyle,
                        ]}
                    >
                        <View
                            sx={{
                                ...StyleSheet.absoluteFillObject,
                                backgroundColor: 'blackAlpha400',
                                zIndex: 1,
                            }}
                        />

                        <Image
                            source={params?.uri}
                            sx={{
                                resizeMode: 'contain',
                                width: 'full',
                                aspectRatio: size.width / size.height,
                                maxHeight: SCREEN_HEIGHT - 100,
                                maxWidth: 'screen-width',
                            }}
                            onLayout={(e) =>
                                (imageHeight.value =
                                    e.nativeEvent.layout.height)
                            }
                        />

                        <GestureDetector gesture={panGesture}>
                            <Animated.View
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    {
                                        width: '100%',
                                        height: 250,
                                        overflow: 'hidden',
                                        zIndex: 10,
                                    },
                                    boxImageAnimatedStyle,
                                ]}
                            >
                                <Animated.View style={imageAnimatedStyle}>
                                    <Image
                                        source={params?.uri}
                                        sx={{
                                            resizeMode: 'contain',
                                            width: 'full',
                                            aspectRatio:
                                                size.width / size.height,
                                            maxHeight: SCREEN_HEIGHT - 100,
                                            maxWidth: 'screen-width',
                                        }}
                                    />
                                </Animated.View>

                                <CropLine />
                            </Animated.View>
                        </GestureDetector>
                    </Animated.View>
                </View>

                <Button
                    content={i18n.t('common.rotate')}
                    variant='outline'
                    rounded={false}
                    schema='white'
                    sx={{
                        alignSelf: 'center',
                    }}
                    onPress={() => {
                        rotate.value = withTiming(rotate.value + 90);
                    }}
                />
            </Screen>
        );
    },
);

export { CropImage };
