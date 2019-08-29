module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'jsx-a11y',
    'jest',
    'react-hooks',
    'import'
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'import/no-internal-modules': [
      2,
      {
        allow: [
          'components/*',
          '**/types',
          '**/*.service',
          '@material-ui/icons/*'
        ]
      }
    ],
    'import/no-absolute-path': 2,
    'import/first': 2,
    'import/order': 2
  },
  settings: {
    react: { version: 'detect' },
    'import/resolver': {
      typescript: {},

      typescript: {
        directory: './src'
      }
    }
  }
}
