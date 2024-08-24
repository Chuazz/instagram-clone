import { light, dark, RADIUS_FULL, GAP_MD, GAP_LG } from '@instagram/configs';
import { makeTheme } from 'dripsy';
import { Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('screen').width;

const SCREEN_HEIGHT = Dimensions.get('screen').height;

const theme = makeTheme({
	colors: {
		...light,

		modes: {
			dark,
		},
	},
	radii: {
		full: RADIUS_FULL,
		xs: 4,
		sm: 8,
		md: GAP_MD,
		lg: 16,
		xl: 24,
	},
	space: {
		xs: 4,
		sm: 8,
		md: GAP_MD,
		lg: GAP_LG,
		xl: 24,
	},
	fontSizes: {
		sm: 12,
		md: 14,
		lg: 16,
		xl: 24,
		'2xl': 32,
		'3xl': 40,
		'4xl': 48,
	},
	sizes: {
		full: '100%',
		'screen-height': SCREEN_HEIGHT,
		'screen-width': SCREEN_WIDTH,
		'icon-sm': 20,
		'icon-md': 24,
		'icon-lg': 28,
		'icon-xl': 40,
	},
	customFonts: {
		PublicSans: {
			default: 'PublicSans-Medium',

			regular: 'PublicSans',
			medium: 'PublicSans-Medium',
			semibold: 'PublicSans-SemiBold',
			bold: 'PublicSans-Bold',
			extraBold: 'PublicSans-ExtraBold',
			black: 'PublicSans-Black',

			400: 'PublicSans',
			500: 'PublicSans-Medium',
			600: 'PublicSans-SemiBold',
			700: 'PublicSans-Bold',
			800: 'PublicSans-ExtraBold',
			900: 'PublicSans-Black',
		},
	},
	fonts: {
		root: 'PublicSans',
	},
});

type MyTheme = typeof theme;

declare module 'dripsy' {
	interface DripsyCustomTheme extends MyTheme {}
}

export { theme, SCREEN_HEIGHT, SCREEN_WIDTH };
