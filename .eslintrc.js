module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'prettier',
    'jsx-a11y',
    'jest',
    'react-hooks'
  ],
  rules: {
    '@typescript-eslint/explicit-member-accessibility': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  },
  settings: { react: { version: 'detect' } }
}
