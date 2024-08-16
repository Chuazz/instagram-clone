import { beauty } from '@/utils';
import { View } from 'dripsy';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

// type CropLineProps = {
// 	onZoomIn: (_scale: number) => void;
// 	onZoomOut: (_scale: number) => void;
// };

const CropLine = () => {
	const topLefGesture = Gesture.Pan()
		.onStart(() => {})
		.onUpdate((e) => {
			beauty([e.translationX, e.translationY]);
		})
		.runOnJS(true);

	const topRightGesture = Gesture.Pan()
		.onStart(() => {})
		.onUpdate((e) => {
			beauty([e.translationX, e.translationY]);
		})
		.runOnJS(true);

	return (
		<>
			<GestureDetector gesture={topLefGesture}>
				<View
					sx={{
						position: 'absolute',
						width: 24,
						height: 24,
						borderLeftWidth: 2.5,
						borderTopWidth: 2.5,
						borderColor: 'white',
						zIndex: 999,
					}}
				/>
			</GestureDetector>

			<GestureDetector gesture={topRightGesture}>
				<View
					sx={{
						position: 'absolute',
						width: 24,
						height: 24,
						bottom: 0,
						borderLeftWidth: 2.5,
						borderBottomWidth: 2.5,
						borderColor: 'white',
					}}
				/>
			</GestureDetector>

			<View
				sx={{
					position: 'absolute',
					width: 24,
					height: 24,
					right: 0,
					bottom: 0,
					borderRightWidth: 2.5,
					borderBottomWidth: 2.5,
					borderColor: 'white',
				}}
			/>

			<View
				sx={{
					position: 'absolute',
					width: 24,
					height: 24,
					top: 0,
					right: 0,
					borderRightWidth: 2.5,
					borderTopWidth: 2.5,
					borderColor: 'white',
				}}
			/>

			<View
				sx={{
					position: 'absolute',
					width: 24,
					height: 24,
					bottom: 0,
					borderLeftWidth: 2.5,
					borderBottomWidth: 2.5,
					borderColor: 'white',
				}}
			/>

			<View
				sx={{
					position: 'absolute',
					flexDirection: 'row',
					width: 'full',
					top: 0,
					bottom: 0,
					justifyContent: 'space-evenly',
				}}
			>
				<View
					sx={{
						borderWidth: 0.3,
						height: 'full',
						borderColor: 'whiteAlpha300',
						backgroundColor: 'whiteAlpha300',
					}}
				/>

				<View
					sx={{
						borderWidth: 0.3,
						height: 'full',
						borderColor: 'whiteAlpha300',
						backgroundColor: 'whiteAlpha300',
					}}
				/>
			</View>

			<View
				sx={{
					position: 'absolute',
					width: 'full',
					left: 0,
					right: 0,
					top: 0,
					bottom: 0,
					justifyContent: 'space-evenly',
				}}
			>
				<View
					sx={{
						borderWidth: 0.3,
						height: 1,
						borderColor: 'whiteAlpha300',
						backgroundColor: 'whiteAlpha300',
					}}
				/>

				<View
					sx={{
						borderWidth: 0.3,
						height: 1,
						borderColor: 'whiteAlpha300',
						backgroundColor: 'whiteAlpha300',
					}}
				/>
			</View>
		</>
	);
};

export { CropLine };
