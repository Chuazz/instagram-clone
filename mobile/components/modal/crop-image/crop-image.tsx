import { Button } from '@/components/form/button';
import { LoadingOverlay } from '@/components/layout/loading-overlay';
import { Image } from '@/components/ui/image';
import { i18n } from '@/configs/i18n';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@/configs/theme';
import { observer, Show, useObservable } from '@legendapp/state/react';
import ImageEditor from '@react-native-community/image-editor';
import { View } from 'dripsy';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import {
    Platform,
    Image as RNImage,
    StatusBar as RNStatusBar,
    StyleSheet,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { ModalProps } from 'react-native-modalfy';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withClamp,
    withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { CropLine } from './crop-line';

const CROP_HEIGHT = 250;
const CROP_WIDTH = SCREEN_WIDTH;
const MINUS_HEIGHT = 100;

const CropImage = observer(
    ({ modal: { params, closeModal } }: ModalProps<'CropImage'>) => {
        const { onSuccess, image } = params || {};

        const rotate = useSharedValue(0);
        const imageTranslateY = useSharedValue(100);
        const prevImageTranslateY = useSharedValue(0);
        const imageHeight = useSharedValue(0);
        const imageWidth = useSharedValue(0);
        const insets = useSafeAreaInsets();
        const cropping$ = useObservable(false);

        const size = useMemo(() => {
            if (!image?.width && !image?.height && image?.uri) {
                RNImage.getSize(image?.uri, (width, height) => {
                    return { width, height };
                });
            }

            return {
                width: image?.width || SCREEN_WIDTH,
                height: image?.height || SCREEN_HEIGHT - MINUS_HEIGHT,
            };
        }, [image?.uri]);

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
                                max: imageHeight.value - CROP_HEIGHT,
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

        const onDone = () => {
            const cropWidthRatio = CROP_WIDTH / imageWidth.value;
            const cropHeightRatio = CROP_HEIGHT / imageHeight.value;
            const heightRatio = size.height / imageHeight.value;
            const y = imageTranslateY.value * heightRatio;

            if (!image?.uri) {
                return;
            }

            ImageEditor.cropImage(image?.uri, {
                resizeMode: 'contain',
                offset: {
                    x: 0,
                    y,
                },
                size: {
                    height: size.height * cropHeightRatio,
                    width: size.width * cropWidthRatio,
                },
            })
                .then((result) => {
                    onSuccess?.({
                        height: result.height,
                        type: result.type,
                        uri: result.uri,
                        width: result.width,
                    });

                    closeModal();
                })
                .catch((e) => {
                    console.log(e);
                })
                .finally(() => {
                    cropping$.set(false);
                });
        };

        return (
            <View
                sx={{
                    backgroundColor: 'black',
                    width: 'screen-width',
                    height: '100%',
                    mt:
                        Platform.OS === 'android'
                            ? RNStatusBar.currentHeight
                            : insets.top,
                }}
            >
                <StatusBar backgroundColor='black' />

                <Show if={cropping$}>
                    <LoadingOverlay />
                </Show>

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
                        onPress={onDone}
                    />
                </View>

                <View
                    sx={{
                        height: SCREEN_HEIGHT - 145,
                        backgroundColor: 'black',
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
                            source={image?.uri}
                            contentFit='contain'
                            sx={{
                                width: 'full',
                                aspectRatio: size.width / size.height,
                                maxHeight: SCREEN_HEIGHT - MINUS_HEIGHT,
                                maxWidth: 'screen-width',
                            }}
                            onLayout={(e) => {
                                imageHeight.value = e.nativeEvent.layout.height;
                                imageWidth.value = e.nativeEvent.layout.width;
                            }}
                        />

                        <GestureDetector gesture={panGesture}>
                            <Animated.View
                                style={[
                                    StyleSheet.absoluteFillObject,
                                    {
                                        width: CROP_WIDTH,
                                        height: CROP_HEIGHT,
                                        overflow: 'hidden',
                                        zIndex: 10,
                                    },
                                    boxImageAnimatedStyle,
                                ]}
                            >
                                <Animated.View style={imageAnimatedStyle}>
                                    <Image
                                        source={image?.uri}
                                        contentFit='contain'
                                        sx={{
                                            width: 'full',
                                            aspectRatio:
                                                size.width / size.height,
                                            maxHeight:
                                                SCREEN_HEIGHT - MINUS_HEIGHT,
                                            maxWidth: 'screen-width',
                                        }}
                                    />
                                </Animated.View>

                                <CropLine onZoom={() => {}} />
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
            </View>
        );
    },
);

export { CropImage };
