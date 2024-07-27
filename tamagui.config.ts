import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';
import { color } from './configs';

const tamaguiConfig = createTamagui({
    ...config,
    themes: {
        ...config.themes,
        dark: color.dark,
        light: color.light,
    },
});

type Conf = typeof tamaguiConfig;
declare module 'tamagui' {
    interface TamaguiCustomConfig extends Conf {}
}

export default tamaguiConfig;
