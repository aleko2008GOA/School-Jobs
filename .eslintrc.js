// .eslintrc.js
export default {
    root: true,
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        // ...
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        react: { version: 'detect' },
    },
    rules: {
      
    },
    overrides: [
        {
            files: ['api/**/*.js'],
            env: {
                node: true,
                es2021: true
            },
            rules: {
            
            }
        }
    ]
};