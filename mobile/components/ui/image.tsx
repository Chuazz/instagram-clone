import { BASE_API_URL, image } from '@/configs';
import { Memo, useObservable } from '@legendapp/state/react';
import { Image as EPImage, SxProp } from 'dripsy';
import { useEffect } from 'react';
import { ImageProps as RNImageProps } from 'react-native';

type ImageProps = Omit<RNImageProps, 'source' | 'style'> & {
    source: keyof typeof image | (string & NonNullable<unknown>);
    fromServer?: boolean;
    sx?: SxProp;
};

const Image = ({ source, fromServer, ...props }: ImageProps) => {
    const source$ = useObservable(
        image[source as keyof typeof image] || {
            uri: fromServer ? BASE_API_URL + '/assets/' + source : source,
        },
    );

    const onError = () => {
        source$.set(image['PictureIcon']);
    };

    useEffect(() => {
        if (image[source as keyof typeof image]) {
            source$.set(image[source as keyof typeof image]);
        }
    }, [source]);

    return (
        <Memo>
            <EPImage
                {...props}
                onError={onError}
                source={source$.get()}
            />
        </Memo>
    );
};

export { Image };
