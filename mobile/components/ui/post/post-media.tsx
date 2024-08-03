import { SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { ReactNode, useRef } from 'react';
import { observer } from '@legendapp/state/react';
import Carousel from 'react-native-snap-carousel';
import { View } from 'dripsy';
import { Image } from '../image';
import { usePost } from './post';
import { PostImage } from '@/types/data/post';

const PostMedia = observer(({ children }: { children: ReactNode }) => {
    const post = usePost();
    const data = post?.data?.get();
    const ref = useRef<Carousel<PostImage>>(null);

    return (
        <View
            sx={{
                mt: 'md',
            }}
        >
            <Carousel
                ref={ref}
                data={data?.images || []}
                sliderWidth={SCREEN_WIDTH}
                itemWidth={SCREEN_WIDTH}
                lockScrollWhileSnapping={true}
                onSnapToItem={(i) => {
                    post?.currentPage.set(i);
                    post?.showPage.set(true);
                }}
                renderItem={({ item }) => (
                    <Image
                        source={item.directus_files_id.id}
                        fromServer={true}
                        sx={{
                            aspectRatio:
                                item.directus_files_id.width /
                                item.directus_files_id.height,
                        }}
                    />
                )}
            />

            {children}
        </View>
    );
});

export { PostMedia };
