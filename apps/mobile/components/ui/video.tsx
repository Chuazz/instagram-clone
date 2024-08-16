import { useCustomVideoPlayer } from '@/hooks/use-video-player';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@instagram/configs';
import type { File } from '@instagram/types/data';
import { Show, observer } from '@legendapp/state/react';
import { View, useDripsyTheme } from 'dripsy';
import { Video as EPVideo, ResizeMode } from 'expo-av';
import type { ReactNode } from 'react';
import { ActivityIndicator, StatusBar, StyleSheet } from 'react-native';
import { Button } from '../form/button';
import { Image } from './image';

type VideoProps = {
	/**
	 * Your video source
	 */
	file: File;
	/**
	 * Should your video can autoplay or not
	 *
	 * Default: false
	 */
	autoPlay?: boolean;
	/**
	 * Your video poster
	 */
	poster?: string;
	/**
	 * Height you want to remove something like: footer, header, bla bla
	 *
	 * Default: 100
	 */
	minusHeight?: number;
	/**
	 * Width you want to remove something like: your padding, margin, bla bla
	 *
	 * Default: 0
	 */
	minusWidth?: number;
	/**
	 * Want to add more control ?
	 */
	children?: ReactNode;
	/**
	 * Event occur when control toggle visible
	 */
	onMediaVisibleChange?: (_value: boolean) => void;
};

const Video = observer(
	({
		poster,
		file,
		autoPlay = true,
		onMediaVisibleChange,
		minusHeight = 0,
		minusWidth = 0,
		children,
	}: VideoProps) => {
		const FINAL_SCREEN_HEIGHT =
			SCREEN_HEIGHT - (StatusBar.currentHeight || 0) - minusHeight;

		const { theme } = useDripsyTheme();
		const FINAL_SCREEN_WIDTH = SCREEN_WIDTH - minusWidth;

		const {
			videoRef,
			onLoad,
			loading,
			onReadyForDisplay,
			onStatusUpdate,
			onLoadStart,
			size,
			playing,
			visible,
			onToggle,
		} = useCustomVideoPlayer({ autoPlay, file, onMediaVisibleChange });

		const height = (() => {
			if (!size?.height) {
				return 300;
			}

			if (size.width >= size.height) {
				return FINAL_SCREEN_WIDTH / (16 / 9);
			}

			return Math.min(size.height, FINAL_SCREEN_HEIGHT);
		})();

		return (
			<View
				sx={{
					backgroundColor: 'black',
					width: 'full',
					height: 'full',
					overflow: 'hidden',
					justifyContent: 'center',
					alignItems: 'center',
				}}
			>
				<EPVideo
					ref={videoRef}
					source={{
						uri: `${process.env.EXPO_PUBLIC_API_URL}/assets/${file.id}`,
					}}
					usePoster={!!poster}
					posterSource={{ uri: poster }}
					useNativeControls={false}
					resizeMode={ResizeMode.CONTAIN}
					isLooping={true}
					progressUpdateIntervalMillis={1}
					onReadyForDisplay={onReadyForDisplay}
					onPlaybackStatusUpdate={onStatusUpdate}
					onLoadStart={onLoadStart}
					onLoad={onLoad}
					style={[
						{
							width: FINAL_SCREEN_WIDTH,
							height,
						},
					]}
					posterStyle={[
						{
							width: FINAL_SCREEN_WIDTH,
							height,
							resizeMode: 'contain',
						},
					]}
				/>

				<Show if={loading}>
					<View
						style={{
							position: 'absolute',
							top: 0,
							right: 0,
							left: 0,
							bottom: 0,
							justifyContent: 'center',
							alignItems: 'center',
						}}
					>
						<ActivityIndicator size='large' color={theme.colors.primary700} />
					</View>
				</Show>

				{children}

				<Button
					variant='transparent'
					sx={{
						...StyleSheet.absoluteFillObject,
						alignItems: 'center',
						justifyContent: 'center',
					}}
					onPress={() => onToggle()}
				>
					<Show if={visible}>
						<Image
							source={playing ? 'PauseFillIcon' : 'PlayFillIcon'}
							sx={{
								width: 'icon-xl',
								height: 'icon-xl',
								tintColor: 'rgba(255,255,255,0.7)',
							}}
						/>
					</Show>
				</Button>
			</View>
		);
	},
);

export { Video };
