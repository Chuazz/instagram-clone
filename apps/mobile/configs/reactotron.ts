import Reactotron from 'reactotron-react-native';

if (__DEV__) {
	Reactotron.configure({
		name: 'instagram-clone',
	})
		.useReactNative({
			asyncStorage: true,
			networking: {
				ignoreUrls: /symbolicate/,
			},
		})
		.connect();
}
