import { File } from '@/types/data/file';
import { observer, Show } from '@legendapp/state/react';
import { useMemo } from 'react';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { Image } from '../image';
import { Video } from '../video';
import { View } from 'dripsy';
import { getAssetsUrl } from '@/utils/db';

type CarouselItemProps = {
    file: File;
    onSwipeStart: () => void;
    onSwipeLeft: () => void;
    onSwipeRight: () => void;
};

const CarouselItem = observer(
    ({ file, onSwipeStart, onSwipeLeft, onSwipeRight }: CarouselItemProps) => {
        const panGesture = useMemo(
            () =>
                Gesture.Pan()
                    .onStart(() => {
                        onSwipeStart();
                    })
                    .onEnd((e) => {
                        if (e.translationY < -50 || e.translationY > 50) {
                            return;
                        }

                        if (e.translationX > 0) {
                            onSwipeRight();
                        }

                        if (e.translationX < 0) {
                            onSwipeLeft();
                        }
                    })
                    .runOnJS(true),
            [],
        );

        return (
            <GestureDetector gesture={panGesture}>
                <View
                    sx={{
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Show
                        if={() => file.type !== 'image/jpeg'}
                        else={
                            <Image
                                source={getAssetsUrl(file.id)}
                                contentFit='contain'
                                sx={{
                                    width: 'screen-width',
                                    height: 'full',
                                }}
                            />
                        }
                    >
                        <Video
                            file={file}
                            autoPlay={false}
                        />
                    </Show>
                </View>
            </GestureDetector>
        );
    },
);

export { CarouselItem };
