

module.exports = {
  "extends": [
    "react-app",
    "react-app/jest",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript"
  ],
  "import/resolver": {
    "alias": {
      "map": [
        ["@components", "./src/components"]
        ["@services", "./src/services"]
        ["@utility", "./src/utility"]
        ["@theme", "./src/theme"]
        ["@assets", "./src/assets"]
      ],
      "extensions": [".ts", ".tsx", ".js", ".jsx", ".json"]
    }
  },
  rules: {
    'import/order': [
      'error',
      {
        pathGroups: [
          {
            pattern: '@components/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@services/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@utility/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@theme/**',
            group: 'parent',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'parent',
            position: 'before',
          },
        ],
      },
    ],
  },
}
