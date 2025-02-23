/** @type {import('eslint').Linter.Config} */
export default {
    root: true,
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'prettier'
    ],
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
    settings: {
        react: {
            version: 'detect'
        }
    },
    rules: {
        'no-console': ['warn', { allow: ['warn', 'error'] }],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'import/order': [
            'error',
            {
                groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'object', 'type', 'index'],
                'newlines-between': 'always',
                alphabetize: { order: 'asc', caseInsensitive: true }
            }
        ]
    }
};