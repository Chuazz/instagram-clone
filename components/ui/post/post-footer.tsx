import { View } from 'tamagui';
import { PostMediaPaginate } from './post-media-paginate';
import { PostBottomLeftAction } from './post-bottom-left-action';
import { PostSave } from './post-save';
import { PostTotalLikes } from './post-total-like';
import { PostContent } from './post-content';
import { PostTotalComments } from './post-total-comments';
import { PostCreatedAt } from './post-created-at';
import { SPACING } from '@/configs';

const FLEX_BASIS = '33.33333%';

const PostFooter = () => {
    return (
        <View
            px={SPACING}
            mt={SPACING}
            gap={8}
        >
            <View
                flexDirection="row"
                alignItems="center"
            >
                <View flexBasis={FLEX_BASIS}>
                    <PostBottomLeftAction />
                </View>

                <View
                    flexBasis={FLEX_BASIS}
                    justifyContent="center"
                    alignItems="center"
                >
                    <PostMediaPaginate />
                </View>

                <View
                    flexBasis={FLEX_BASIS}
                    alignItems="flex-end"
                >
                    <PostSave />
                </View>
            </View>

            <PostTotalLikes />

            <PostContent />

            <PostTotalComments />

            <PostCreatedAt />
        </View>
    );
};

export { PostFooter };
