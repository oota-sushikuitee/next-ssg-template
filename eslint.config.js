// eslint.config.js
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import tseslint from 'typescript-eslint';

// eslint-config-next v16 ships a native flat config, so it is imported
// directly instead of being bridged through FlatCompat (which was needed
// for the v15 legacy-eslintrc-format config).
export default tseslint.config(
  {
    ignores: ['node_modules/', '.next/', 'out/'],
  },
  ...nextCoreWebVitals,
  ...tseslint.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'prettier/prettier': 'error',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
    },
  }
);
