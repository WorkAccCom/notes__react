module.exports = {
  extends: [
    '@mate-academy/eslint-config-react-typescript',
    'plugin:react/recommended',
  ],
  rules: {
    // React
    'react/prop-types': 0,
    'react/self-closing-comp': 0,
    
    // !!! manualy added 3 rules
    'react/display-name': 0,
    'no-console': 0,
    'padded-blocks': 0,
    'react/jsx-indent': 0,
    
    // JavaScript
    semi: 0,
    'no-proto': 0,
    'no-unused-vars': 0,
    'no-trailing-spaces': 0,

    // TypeScript
    // '@typescript-eslint/no-unused-vars': ['error'],
    // !!! manualy added
    
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/camelcase': 0,
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/ban-types': 0,
    '@typescript-eslint/semi': ['error'],
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
  ],
};
