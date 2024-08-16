import type { File } from '@instagram/types/data';
import {
	useEffectOnce,
	useObservable,
	useObserve,
} from '@legendapp/state/react';
import { useNavigation } from '@react-navigation/native';
import type {
	AVPlaybackStatus,
	Video,
	VideoReadyForDisplayEvent,
} from 'expo-av';
import { useRef } from 'react';
import { AppState } from 'react-native';

type UseCustomVideoType = {
	file: File;
	autoPlay?: boolean;
	onMediaVisibleChange?: (_value: boolean) => void;
};

const useCustomVideoPlayer = ({
	file,
	autoPlay = true,
	onMediaVisibleChange,
}: UseCustomVideoType) => {
	const videoRef = useRef<Video>(null);
	const duration$ = useObservable(0);
	const currentTime$ = useObservable(0);
	const loading$ = useObservable(false);
	const playing$ = useObservable(autoPlay);
	const navigation = useNavigation();
	const visible$ = useObservable(false);

	const size$ = useObservable<{ width: number; height: number }>({
		width: 0,
		height: 0,
	});

	const onToggle = async () => {
		if (playing$.get()) {
			await videoRef.current?.pauseAsync();

			playing$.set(false);
		} else {
			await videoRef.current?.playAsync();

			playing$.set(true);
		}

		visible$.set(true);
	};

	useEffectOnce(() => {
		const subscription = AppState.addEventListener('change', (nextAppState) => {
			if (nextAppState === 'background') {
				videoRef.current?.pauseAsync();
			}
		});

		return () => {
			subscription.remove();
		};
	}, []);

	useEffectOnce(() => {
		const blur = () => {
			videoRef.current?.pauseAsync();
		};

		navigation.addListener('blur', blur);

		return () => navigation.removeListener('blur', blur);
	}, []);

	// useEffect(() => {
	//     playing$.set(!autoPlay);

	//     onToggle();
	// }, [autoPlay]);

	useObserve(visible$, (target) => {
		const id = setTimeout(() => {
			if (target.value) {
				visible$.set(false);
			}

			onMediaVisibleChange?.(visible$.get());
		}, 3500);

		target.onCleanup = () => clearTimeout(id);
	});

	return {
		videoRef,

		duration: duration$.get(),
		currentTime: currentTime$.get(),
		loading: loading$.get(),
		playing: playing$.get(),
		size: size$.get(),
		visible: visible$.get(),

		onToggle,

		onLoadStart: () => {
			loading$.set(true);
		},

		onLoad: (meta: AVPlaybackStatus) => {
			if (meta.isLoaded && meta.durationMillis) {
				duration$.set(meta.durationMillis / 1000);
			}

			loading$.set(false);
		},

		onReadyForDisplay: async (video: VideoReadyForDisplayEvent) => {
			if (video.status?.isLoaded) {
				if (!file.width && !file.height) {
					size$.width.set(video.naturalSize.width);
					size$.height.set(video.naturalSize.height);
				}

				if (autoPlay) {
					await videoRef.current?.playAsync();
				}

				loading$.set(false);
				playing$.set(autoPlay);
			}
		},

		onStatusUpdate: (e: AVPlaybackStatus) => {
			if (e.isLoaded) {
				currentTime$.set(Math.floor(e.positionMillis / 1000));
			}

			if (!e.isLoaded && e.error) {
				loading$.set(false);
				playing$.set(false);
			}
		},

		onSeek: async (value: number) => {
			loading$.set(true);

			videoRef.current?.playFromPositionAsync(value * 1000).finally(() => {
				loading$.set(false);
			});
		},
	};
};

export { useCustomVideoPlayer };
