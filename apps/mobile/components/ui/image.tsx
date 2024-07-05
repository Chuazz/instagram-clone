import { image } from '@super-app/configs/src/image-config';
import { Image as EPImage, ImageProps as EPImageProps } from 'expo-image';
import { DimensionValue } from 'react-native';

type ImageProps = Omit<EPImageProps, 'source'> & {
	source: keyof typeof image | (string & object);
	width: DimensionValue;
	height: DimensionValue;
};

const blurhash =
	'|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

const Image = ({ source, width, height, ...props }: ImageProps) => {
	return (
		<EPImage
			placeholder={{ blurhash }}
			contentFit='cover'
			transition={1000}
			source={image[source as keyof typeof image] || source}
			{...props}
			style={[
				{
					width,
					height,
				},
				props.style,
			]}
		/>
	);
};

export { Image };
