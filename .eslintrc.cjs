module.exports = {
  env: {
    browser: true,
    node: true,
  },
  globals: {
    route: 'readonly',
  },
  settings: {
    react: {
      version: 'detect',
    },
    tailwindcss: {
      callees: ['cn', 'cva'],
      config: 'tailwind.config.cjs',
    },
  },
  ignorePatterns: [
    'bootstrap/cache',
    'bootstrap/ssr',
    'node_modules',
    'dist',
    'build',
    'coverage',
    'public',
    'scripts',
    'src/serviceWorker.ts',
    '/vendor',
    'resources/js/ziggy.js',
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:tailwindcss/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['tailwindcss'],
  root: true,
  rules: {
    // We don't require `import React` in files
    'react/react-in-jsx-scope': 'off',
    // Don't require to escape all entities
    'react/no-unescaped-entities': 'off',
    // Allow passing children as a prop, useful for our layouts
    'react/no-children-prop': 'off',
    // Only allow TS Comments with a description
    '@typescript-eslint/ban-ts-comment': [
      'error',
      {
        'ts-expect-error': 'allow-with-description',
        'ts-ignore': 'allow-with-description',
        'ts-nocheck': 'allow-with-description',
        'ts-check': 'allow-with-description',
      },
    ],
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/classnames-order': 'error',
    // 'no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
    // '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-member-accessibility': 'error',
    // '@typescript-eslint/no-unused-vars': 'off',
    // '@typescript-eslint/no-explicit-any': 'error',
    // 'react/prop-types': 'off',
    // 'react/jsx-uses-react': 'off',
    // 'react/jsx-uses-vars': 'error',
    // 'react-hooks/rules-of-hooks': 'error',
    // 'react-hooks/exhaustive-deps': 'warn',
  },
};
