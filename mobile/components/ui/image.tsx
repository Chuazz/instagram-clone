import { image } from '@/configs/image';
import { observer, useObservable } from '@legendapp/state/react';
import { Image as EPImage, SxProp } from 'dripsy';
import { useEffect } from 'react';
import { ImageProps as RNImageProps } from 'react-native';

type ImageProps = Omit<
    RNImageProps,
    'source' | 'style' | 'width' | 'height'
> & {
    source?: keyof typeof image | (string & NonNullable<unknown>);
    placeholder?: keyof typeof image | (string & NonNullable<unknown>);
    fromServer?: boolean;
    sx?: SxProp;
};

const Image = observer(
    ({
        source,
        placeholder = 'PictureIcon',
        fromServer,
        ...props
    }: ImageProps) => {
        const source$ = useObservable(() => {
            const result = image?.[source as keyof typeof image];

            if (result) {
                return result;
            }

            if (fromServer) {
                return {
                    uri: process.env.EXPO_PUBLIC_API_URL + '/assets/' + source,
                };
            }

            return (
                image[placeholder as keyof typeof image] || image.PictureIcon
            );
        });

        const onError = () => {
            if (image[placeholder as keyof typeof image]) {
                source$.set(image[placeholder as keyof typeof image]);

                return;
            }

            source$.set(image.PictureIcon);
        };

        useEffect(() => {
            if (image[source as keyof typeof image]) {
                source$.set(image[source as keyof typeof image]);

                return;
            }

            if (!fromServer) {
                source$.set(image.PictureIcon);
            }
        }, [source, fromServer]);

        return (
            <EPImage
                {...props}
                onError={onError}
                source={source$.get()}
            />
        );
    },
);

export { Image };
