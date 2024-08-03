import { Text, View } from 'dripsy';
import { usePost } from './post';
import { observer, useObserve } from '@legendapp/state/react';

const PostMediaCount = observer(() => {
    const post = usePost();

    useObserve(post?.currentPage, (target) => {
        const id = setTimeout(() => {
            if (target.value) {
                post?.showPage.set(false);
            }
        }, 5000);

        target.onCleanup = () => {
            clearTimeout(id);
        };
    });

    if (
        !post?.currentPage.get() ||
        post?.currentPage.get() === 0 ||
        !post.showPage.get()
    ) {
        return null;
    }

    return (
        <View
            sx={{
                backgroundColor: 'black',
                borderRadius: 'full',
                width: 44,
                py: 6,
                position: 'absolute',
                top: 'md',
                right: 'md',
            }}
        >
            <Text
                sx={{
                    color: 'white',
                    textAlign: 'center',
                    fontSize: 'sm',
                }}
            >
                {post?.currentPage.get() + 1}/{post?.data.images.length}
            </Text>
        </View>
    );
});

export { PostMediaCount };
