import { SCREEN_WIDTH } from '@/configs/theme';
import { MediaType, useMediaLibrary } from '@/hooks/use-media-library';
import { BottomSheetStackParamsList } from '@/types/bottom-sheet';
import { observer, Show, useObservable } from '@legendapp/state/react';
import { Text, View } from 'dripsy';
import { useRef } from 'react';
import { Button } from '../../form/button';
import { LoadingOverlay } from '../../layout/loading-overlay';
import { PagerView, PagerViewRef } from '../../layout/pager-view';
import { Image } from '../../ui/image';
import { AlbumList } from './album-list';
import { AlbumDetail } from './album-detail';

const MediaLibrary = observer(
    ({ closeSheet }: BottomSheetStackParamsList['MediaLibrary']) => {
        const { assets, gettingAssets } = useMediaLibrary();
        const asset$ = useObservable<MediaType>();
        const pagerRef = useRef<PagerViewRef>(null);

        return (
            <PagerView ref={pagerRef}>
                <Show if={gettingAssets}>
                    <LoadingOverlay />
                </Show>

                <View
                    sx={{
                        height: 'screen-height',
                        width: 'screen-width',
                        px: 'md',
                    }}
                >
                    <AlbumList onCancel={closeSheet}>
                        <View
                            sx={{
                                flexDirection: 'row',
                                flexWrap: 'wrap',
                                gap: 'xs',
                            }}
                        >
                            {assets.map((asset, index) => (
                                <View
                                    key={asset.album.id}
                                    sx={{ mt: index < 3 ? undefined : 'xl' }}
                                >
                                    <Button
                                        variant='transparent'
                                        onPress={() => {
                                            asset$.set(asset);

                                            pagerRef.current?.scrollTo(1);
                                        }}
                                    >
                                        <Image
                                            source={
                                                asset?.media?.assets[0]?.uri
                                            }
                                            sx={{
                                                width: SCREEN_WIDTH / 3 - 15,
                                                height: SCREEN_WIDTH / 3 - 15,
                                                borderRadius: 'sm',
                                            }}
                                        />
                                    </Button>

                                    <Text
                                        sx={{
                                            fontWeight: 'semibold',
                                            textAlign: 'center',
                                            mt: 'sm',
                                        }}
                                    >
                                        {asset.album.title}
                                    </Text>

                                    <Text
                                        sx={{
                                            fontWeight: 'semibold',
                                            textAlign: 'center',
                                            color: 'gray500',
                                        }}
                                    >
                                        {asset.album.assetCount}
                                    </Text>
                                </View>
                            ))}
                        </View>
                    </AlbumList>
                </View>

                <View
                    sx={{
                        height: 'screen-height',
                        width: 'screen-width',
                        px: 'md',
                    }}
                >
                    <Show if={asset$}>
                        <AlbumDetail
                            asset={asset$.get()!}
                            onCancel={() => {
                                pagerRef.current?.scrollTo(0);
                            }}
                        />
                    </Show>
                </View>
            </PagerView>
        );
    },
);

export { MediaLibrary };
