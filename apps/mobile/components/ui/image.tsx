import { BASE_API_URL } from '@super-app/configs/src';
import { image } from '@super-app/configs/src/image-config';
import { Image as EPImage, ImageProps as EPImageProps } from 'tamagui';

type ImageProps = Omit<EPImageProps, 'source'> & {
	source: keyof typeof image | (string & NonNullable<unknown>);
	fromServer?: boolean;
};

const Image = ({ source, fromServer, ...props }: ImageProps) => {
	return (
		<EPImage
			{...props}
			source={
				image[source as keyof typeof image] || {
					uri: fromServer
						? BASE_API_URL + 'assets/' + source
						: source,
				}
			}
		/>
	);
};

export { Image };
