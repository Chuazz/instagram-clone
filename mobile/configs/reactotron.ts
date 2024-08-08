import Reactotron from 'reactotron-react-native';

if (__DEV__) {
    Reactotron.configure({ name: 'instagram-clone' })
        .useReactNative()
        .connect();
}
