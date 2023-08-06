module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard-with-typescript', 'plugin:prettier/recommended'],
  overrides: [],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', 'react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
  },
}

// module.exports = {
//     root: true,
//     env: { browser: true, es2020: true },
//     extends: [
//       'eslint:recommended',
//       'plugin:@typescript-eslint/recommended',
//       'plugin:react-hooks/recommended',
//     ],
//     ignorePatterns: ['dist', '.eslintrc.cjs'],

//     plugins: ['react-refresh'],
//     rules: {
//       'react-refresh/only-export-components': [
//         'warn',
//         { allowConstantExport: true },
//       ],
//     },
//   }
