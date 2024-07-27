import { Text, View } from 'tamagui';
import { usePost } from './post';
import { observer, useObserve } from '@legendapp/state/react';
import { SPACING } from '@/configs';

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

    if (!post?.currentPage.get() || post?.currentPage.get() === 0 || !post.showPage.get()) {
        return null;
    }

    return (
        <View
            backgroundColor="$black"
            borderRadius={9999}
            width={44}
            py={6}
            position="absolute"
            top={SPACING}
            right={SPACING}
        >
            <Text
                color="white"
                textAlign="center"
                fontSize={12}
            >
                {post?.currentPage.get() + 1}/{post?.data.images.length}
            </Text>
        </View>
    );
});

export { PostMediaCount };
