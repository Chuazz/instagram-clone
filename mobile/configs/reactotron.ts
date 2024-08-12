import Reactotron, { asyncStorage } from 'reactotron-react-native';

if (__DEV__) {
    Reactotron.configure({
        name: 'instagram-clone',
    })
        .use(asyncStorage())
        .useReactNative({
            asyncStorage: true,
            networking: {
                ignoreUrls: /symbolicate/,
            },
        })
        .connect();
}
