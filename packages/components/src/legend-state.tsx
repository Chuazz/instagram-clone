import { enableReactNativeComponents } from '@legendapp/state/config/enableReactNativeComponents';
import { configureObservableSync, syncObservable } from '@legendapp/state/sync';
import { ObservablePersistAsyncStorage } from '@legendapp/state/persist-plugins/async-storage';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app$, auth$ } from '@super-app/store/src';

enableReactNativeComponents();

configureObservableSync({
	persist: {
		plugin: ObservablePersistAsyncStorage,
		asyncStorage: { AsyncStorage },
	},
});

syncObservable(auth$, {
	persist: {
		name: 'auth',
	},
});

syncObservable(app$, {
	persist: {
		name: 'app',
	},
});

const LegendState = () => {
	return null;
};

export { LegendState };
