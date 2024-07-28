import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { makeTheme } from 'dripsy';

const SPACING = 12;

const INPUT_HEIGHT = 60;

const RADIUS_FULL = 9999;

const BUTTON_MD_SIZE = 40;

const light = {
    white: '#fff',
    black: '#000',

    primary50: '#ecfaff',
    primary100: '#d4f2ff',
    primary200: '#b2eaff',
    primary300: '#7de0ff',
    primary400: '#40cbff',
    primary500: '#14abff',
    primary600: '#008bff',
    primary700: '#0073ff',
    primary800: '#0064df',
    primary900: '#0850a0',
    primary950: '#0a3161',

    gray50: '#fefefe',
    gray100: '#efefef',
    gray200: '#dcdcdc',
    gray300: '#bdbdbd',
    gray400: '#989898',
    gray500: '#7c7c7c',
    gray600: '#656565',
    gray700: '#525252',
    gray800: '#464646',
    gray900: '#3d3d3d',
    gray950: '#292929',
};

const dark = {
    red323: '',
};

const theme = makeTheme({
    colors: {
        ...light,

        modes: {
            dark,
        },
    },
    radii: {
        full: RADIUS_FULL,
        sm: 8,
        md: 12,
        lg: 16,
    },
    space: {
        md: SPACING,
    },
    sizes: {
        full: '100%',
        screenHeight: SCREEN_HEIGHT,
        screenWidth: SCREEN_WIDTH,
    },
    fontSizes: {
        sm: 12,
        lg: 16,
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

export { theme, SPACING, INPUT_HEIGHT, RADIUS_FULL, BUTTON_MD_SIZE };
