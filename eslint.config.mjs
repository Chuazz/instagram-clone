import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { fixupConfigRules } from '@eslint/compat';

export default [
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...fixupConfigRules(pluginReactConfig),
    {
        files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
        extends: ['expo'],
        languageOptions: {
            globals: globals.browser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
    },
    {
        rules: {
            'react/react-in-jsx-scope': 'off',
            'no-unused-vars': 'warn',
            '@typescript-eslint/no-unused-vars': 'warn',
        },
    },
];
