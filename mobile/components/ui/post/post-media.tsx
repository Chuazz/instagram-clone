import { observer } from '@legendapp/state/react';
import { View } from 'dripsy';
import { ReactNode } from 'react';
import { Carousel } from '../carousel';
import { usePost } from './post';

const PostMedia = observer(({ children }: { children: ReactNode }) => {
    const post = usePost();
    const data = post?.data?.get();

    return (
        <View
            sx={{
                mt: 'md',
            }}
        >
            <Carousel
                media={data?.images.map((t) => t.directus_files_id) || []}
                onSwipe={(i) => {
                    post?.currentPage.set(i);
                    post?.showPage.set(true);
                }}
            />

            {children}
        </View>
    );
});

export { PostMedia };
