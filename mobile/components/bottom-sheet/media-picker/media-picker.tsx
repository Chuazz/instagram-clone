import { SCREEN_WIDTH } from '@/configs/theme';
import { LibraryType, useMediaLibrary } from '@/hooks/use-media-library';
import { BottomSheetStackParamsList } from '@/types/bottom-sheet';
import { observer, Show, useObservable } from '@legendapp/state/react';
import { ScrollView, Text, View } from 'dripsy';
import { useRef } from 'react';
import { Button } from '../../form/button';
import { LoadingOverlay } from '../../layout/loading-overlay';
import { PagerView, PagerViewRef } from '../../layout/pager-view';
import { Image } from '../../ui/image';
import { AlbumDetail } from './album-detail';
import { AlbumList } from './album-list';
import { MediaPickerType } from './media-picker-type';
import { StyleSheet } from 'react-native';
import { Asset } from 'expo-media-library';

const MediaPicker = observer(
    ({
        multiple,
        onSelect,
        closeSheet,
    }: BottomSheetStackParamsList['MediaPicker']) => {
        const { assets, gettingAssets } = useMediaLibrary();
        const library$ = useObservable<LibraryType>();
        const pagerRef = useRef<PagerViewRef>(null);
        const selected$ = useObservable<Asset[]>([]);

        const pickImage = () => {
            pagerRef.current?.scrollTo(1);
        };

        const onAssetPress = (item: Asset) => {
            if (multiple) {
                return;
            }

            selected$.set([item]);
        };

        return (
            <>
                <Show if={pagerRef.current?.index$.get() === 0}>
                    <Image
                        source='BackgroundGradientImage'
                        sx={{
                            width: 'full',
                            height: 'full',
                            ...StyleSheet.absoluteFillObject,
                        }}
                    />
                </Show>

                <PagerView ref={pagerRef}>
                    <Show if={gettingAssets}>
                        <LoadingOverlay />
                    </Show>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            sx={{
                                height: 'screen-height',
                                width: 'screen-width',
                            }}
                        >
                            <MediaPickerType
                                onCancel={closeSheet}
                                onPickImage={pickImage}
                            />
                        </View>
                    </ScrollView>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            sx={{
                                height: 'screen-height',
                                width: 'screen-width',
                                px: 'md',
                            }}
                        >
                            <AlbumList
                                onCancel={() => pagerRef.current?.scrollTo(0)}
                            >
                                <View
                                    sx={{
                                        flexDirection: 'row',
                                        flexWrap: 'wrap',
                                        gap: 'xs',
                                    }}
                                >
                                    {assets.map((asset) => (
                                        <View key={asset.album.id}>
                                            <Button
                                                variant='transparent'
                                                onPress={() => {
                                                    library$.set(asset);

                                                    pagerRef.current?.scrollTo(
                                                        2,
                                                    );
                                                }}
                                            >
                                                <Image
                                                    source={
                                                        asset?.media?.assets[0]
                                                            ?.uri
                                                    }
                                                    sx={{
                                                        width:
                                                            SCREEN_WIDTH / 3 -
                                                            15,
                                                        height:
                                                            SCREEN_WIDTH / 3 -
                                                            15,
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
                    </ScrollView>

                    <ScrollView showsVerticalScrollIndicator={false}>
                        <View
                            sx={{
                                height: 'screen-height',
                                width: 'screen-width',
                                px: 'md',
                            }}
                        >
                            <Show if={library$}>
                                <AlbumDetail
                                    asset={library$.get()!}
                                    onCancel={() => {
                                        pagerRef.current?.scrollTo(1);
                                    }}
                                    onDone={() => {
                                        onSelect(selected$.get());
                                        closeSheet();
                                    }}
                                >
                                    <View
                                        sx={{
                                            flexDirection: 'row',
                                            alignItems: 'center',
                                            flexWrap: 'wrap',
                                            mt: 'sm',
                                            gap: 'xs',
                                        }}
                                    >
                                        {library$
                                            .get()
                                            ?.media.assets.map((item) => (
                                                <View key={item.id}>
                                                    <Button
                                                        variant='transparent'
                                                        sx={{
                                                            borderWidth: 3,
                                                            borderColor:
                                                                selected$.find(
                                                                    (t) =>
                                                                        t.id.get() ===
                                                                        item.id,
                                                                )
                                                                    ? 'primary700'
                                                                    : 'transparent',
                                                        }}
                                                        onPress={() => {
                                                            onAssetPress(item);
                                                        }}
                                                    >
                                                        <Image
                                                            source={item.uri}
                                                            sx={{
                                                                width:
                                                                    SCREEN_WIDTH /
                                                                        3 -
                                                                    17,
                                                                height:
                                                                    SCREEN_WIDTH /
                                                                        3 -
                                                                    17,
                                                                borderRadius:
                                                                    'sm',
                                                            }}
                                                        />
                                                    </Button>
                                                </View>
                                            ))}
                                    </View>
                                </AlbumDetail>
                            </Show>
                        </View>
                    </ScrollView>
                </PagerView>
            </>
        );
    },
);

export { MediaPicker };
