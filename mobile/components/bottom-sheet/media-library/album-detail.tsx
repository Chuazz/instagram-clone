import { Button } from '@/components/form/button';
import { Image } from '@/components/ui/image';
import { SCREEN_WIDTH } from '@/configs/theme';
import { MediaType } from '@/hooks/use-media-library';
import { Text, View } from 'dripsy';

const AlbumDetail = ({
    asset,
    onCancel,
}: {
    asset: MediaType;
    onCancel: () => void;
}) => {
    return (
        <>
            <View
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    mb: 'lg',
                }}
            >
                <Button
                    leftIcon='ArrowLeftOutlineIcon'
                    schema='black'
                    variant='transparent'
                    onPress={onCancel}
                />

                <Text
                    sx={{
                        fontSize: 'lg',
                        fontWeight: 'bold',
                    }}
                >
                    {asset.album.title}
                </Text>

                <Button
                    leftIcon='ArrowLeftOutlineIcon'
                    schema='black'
                    variant='transparent'
                    sx={{
                        opacity: 0,
                    }}
                />
            </View>

            {asset.media.assets.map((item, index) => (
                <View
                    key={item.id}
                    sx={{ mt: index < 3 ? undefined : 'xl' }}
                >
                    <Button
                        variant='transparent'
                        onPress={() => {}}
                    >
                        <Image
                            source={item.uri}
                            sx={{
                                width: SCREEN_WIDTH / 3 - 15,
                                height: SCREEN_WIDTH / 3 - 15,
                                borderRadius: 'sm',
                            }}
                        />
                    </Button>
                </View>
            ))}
        </>
    );
};

export { AlbumDetail };
