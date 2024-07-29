import { SCREEN_HEIGHT, SCREEN_WIDTH } from '@gorhom/bottom-sheet';
import { makeTheme } from 'dripsy';

const SPACING = 12;

const INPUT_HEIGHT = 60;

const RADIUS_FULL = 9999;

const BUTTON_MD_SIZE = 40;

const HEADER_HEIGHT = 50;

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

    red50: '#fff1f1',
    red100: '#ffe4e4',
    red200: '#fdced1',
    red300: '#fba6aa',
    red400: '#f8747e',
    red500: '#f14254',
    red600: '#dd213d',
    red700: '#bb1532',
    red800: '#a71634',
    red900: '#861530',
    red950: '#4b0615',
};

const dark = {};

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
        xl: 20,
    },
    space: {
        xs: 4,
        sm: 8,
        md: SPACING,
        lg: 16,
    },
    sizes: {
        full: '100%',
        screenHeight: SCREEN_HEIGHT,
        screenWidth: SCREEN_WIDTH,
        iconMd: 24,
        iconLg: 32,
    },
    fontSizes: {
        sm: 12,
        md: 14,
        lg: 18,
        xl: 24,
        '2xl': 32,
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

export {
    theme,
    SPACING,
    INPUT_HEIGHT,
    RADIUS_FULL,
    BUTTON_MD_SIZE,
    HEADER_HEIGHT,
};
