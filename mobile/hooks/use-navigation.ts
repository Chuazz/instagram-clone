import { RoutesParam } from '@/types';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation as useEPNavigation } from 'expo-router';

const useNavigation = () => {
    const epNavigate = useEPNavigation<NavigationProp<RoutesParam>>();

    return epNavigate;
};

export { useNavigation };
