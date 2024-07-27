import { BASE_API_URL, image } from '@/configs';
import { useState } from 'react';
import { Image as EPImage, ImageProps as EPImageProps } from 'tamagui';

type ImageProps = Omit<EPImageProps, 'source'> & {
    source: keyof typeof image | (string & NonNullable<unknown>);
    fromServer?: boolean;
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
