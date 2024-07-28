import { BASE_API_URL, image } from '@/configs';
import { useState } from 'react';
import { Image as EPImage, SxProp } from 'dripsy';
import { ImageProps as RNImageProps } from 'react-native';

type ImageProps = Omit<RNImageProps, 'source'> & {
    source: keyof typeof image | (string & NonNullable<unknown>);
    fromServer?: boolean;
    sx?: SxProp;
};

const Image = ({ source, fromServer, ...props }: ImageProps) => {
    const [_source, setSource] = useState(
        image[source as keyof typeof image] || {
            uri: fromServer ? BASE_API_URL + '/assets/' + source : source,
        },
    );

    const onError = () => {
        setSource(image['PictureIcon']);
    };

    return (
        <EPImage
            {...props}
            onError={onError}
            source={_source}
        />
    );
};

export { Image };
