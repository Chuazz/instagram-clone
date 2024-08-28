import { getAssetsUrl } from '@instagram/utils';
import { Show, observer } from '@legendapp/state/react';
import { View } from 'dripsy';
import { Image } from '../image';
import { useUser } from './user';

const UserAvatar = observer(
	({
		size = 40,
		borderSize = size + 12,
		showBorder,
	}: {
		size?: number;
		borderSize?: number;
		showBorder?: boolean;
	}) => {
		const user = useUser();

		return (
			<View
				sx={{
					width: borderSize,
					height: borderSize,
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<Show if={showBorder}>
					<Image
						source='StoryBorderIcon'
						sx={{
							position: 'absolute',
							width: borderSize,
							height: borderSize,
						}}
					/>
				</Show>

				<Image
					source={getAssetsUrl(user?.data.avatar.get()?.toString())}
					placeholder='MaleIcon'
					sx={{
						borderRadius: 'full',
						width: size,
						height: size,
					}}
				/>
			</View>
		);
	},
);

export { UserAvatar };
