module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:css-modules/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:testing-library/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'css-modules',
    'prettier',
    'jsx-a11y',
    'jest',
    'react-hooks',
    'import',
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'import/no-internal-modules': [
      2,
      {
        allow: [
          'components/*',
          '**/types',
          '**/*.service',
          '@material-ui/icons/*',
          'pact/src/dsl/interaction',
        ],
      },
    ],
    'import/no-absolute-path': 2,
    'import/first': 2,
    'import/order': 2,
    'jest/expect-expect': 0,
    'testing-library/prefer-screen-queries': 2,
    'testing-library/prefer-wait-for': 2,
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},

      typescript: {
        directory: './src',
      },
    },
  },
}
