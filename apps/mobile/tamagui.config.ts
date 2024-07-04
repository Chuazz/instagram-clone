import { config } from '@tamagui/config/v3';
import { createTamagui } from 'tamagui';
import { color } from '@super-app/configs/src/color-config';

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
