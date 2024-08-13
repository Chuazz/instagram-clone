import { StyleSheet } from 'react-native';
import { ActivityIndicator, View } from 'dripsy';

const LoadingOverlay = () => {
    return (
        <View
            sx={{
                ...StyleSheet.absoluteFillObject,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'blackAlpha300',
                zIndex: 9999,
            }}
        >
            <ActivityIndicator
                color='primary700'
                size='large'
            />
        </View>
    );
};

export { LoadingOverlay };
