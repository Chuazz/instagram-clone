import { View } from 'dripsy';
import { PostMediaPaginate } from './post-media-paginate';
import { PostBottomLeftAction } from './post-bottom-left-action';
import { PostSave } from './post-save';
import { PostTotalLikes } from './post-total-like';
import { PostContent } from './post-content';
import { PostTotalComments } from './post-total-comments';
import { PostCreatedAt } from './post-created-at';

const FLEX_BASIS = '33.33333%';

const PostFooter = () => {
    return (
        <View
            sx={{
                px: 'md',
                mt: 'md',
                gap: 8,
            }}
        >
            <View
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <View
                    sx={{
                        flexBasis: FLEX_BASIS,
                    }}
                >
                    <PostBottomLeftAction />
                </View>

                <View
                    sx={{
                        flexBasis: FLEX_BASIS,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <PostMediaPaginate />
                </View>

                <View
                    sx={{
                        flexBasis: FLEX_BASIS,
                        alignItems: 'flex-end',
                    }}
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
