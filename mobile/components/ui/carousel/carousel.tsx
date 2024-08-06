import { File } from '@/types/data/file';
import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import Animated, {
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from 'react-native-reanimated';
import { CarouselItem } from './carousel-item';

type CarouselProps = {
    media: File[];
    height?: number;
    onSwipe?: (_index: number) => void;
};

const Carousel = ({ media, height, onSwipe }: CarouselProps) => {
    const translateX = useSharedValue(0);
    const prevTranslateX = useSharedValue(0);

    const bodyAnimatedStyles = useAnimatedStyle(() => ({
        transform: [
            {
                translateX: translateX.value,
            },
        ],
    }));

    return (
        <Animated.View
            style={[
                bodyAnimatedStyles,
                {
                    height: height || SCREEN_WIDTH + 100,
                    flexDirection: 'row',
                    width: SCREEN_WIDTH,
                    backgroundColor: 'black',
                },
            ]}
        >
            {media.map((file, index) => (
                <CarouselItem
                    key={file.id}
                    file={file}
                    onSwipeStart={() => {
                        prevTranslateX.value = Math.abs(translateX.value);
                    }}
                    onSwipeLeft={() => {
                        if (index !== media.length - 1) {
                            translateX.value = withTiming(
                                -(prevTranslateX.value + SCREEN_WIDTH),
                            );

                            onSwipe?.(index + 1);
                        }
                    }}
                    onSwipeRight={() => {
                        if (translateX.value < 0) {
                            translateX.value = withTiming(
                                -(prevTranslateX.value - SCREEN_WIDTH),
                            );

                            onSwipe?.(index - 1);
                        }
                    }}
                />
            ))}
        </Animated.View>
    );
};

export { Carousel, CarouselItem };
