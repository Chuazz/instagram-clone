import { image } from '@/configs/image';
import { observer, useObservable } from '@legendapp/state/react';
import { SxProp, useSx } from 'dripsy';
import { useEffect } from 'react';
import { Image as EPImage, ImageProps as EPImageProps } from 'expo-image';

type ImageProps = Omit<
    EPImageProps,
    'source' | 'style' | 'width' | 'height'
> & {
    source?: keyof typeof image | (string & NonNullable<unknown>);
    placeholder?: keyof typeof image | (string & NonNullable<unknown>);
    sx?: SxProp;
};

const Image = observer(({ source, placeholder, sx, ...props }: ImageProps) => {
    const sxStyle = useSx();

    const source$ = useObservable(() => {
        const result = image?.[source as keyof typeof image];

        if (result) {
            return result;
        }

        if (source) {
            return {
                uri: source,
            };
        }

        return image?.[placeholder as keyof typeof image] || image.PictureIcon;
    });

    const onError = () => {
        source$.set(
            image[placeholder as keyof typeof image] || image.PictureIcon,
        );
    };

    useEffect(() => {
        if (image[source as keyof typeof image]) {
            source$.set(image[source as keyof typeof image]);

            return;
        }

        if (source) {
            source$.set({
                uri: source,
            });

            return;
        }

        source$.set(
            image[placeholder as keyof typeof image] || image.PictureIcon,
        );
    }, [source]);

    return (
        <EPImage
            transition={1000}
            {...props}
            style={sxStyle(sx || {})}
            source={source$.get()}
            onError={onError}
        />
    );
});

export { Image };
