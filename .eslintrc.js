module.exports = {
  extends: [
    "eslint:recommended",
    "react-app",
    "react-app/jest",
    "airbnb",
    "airbnb/hooks",
    "plugin:react/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
  ],
  settings: {
    "import/extensions": [".js", ".jsx", ".ts", ".tsx"],
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
    "import/resolver": {
      typescript: {},
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
    tsconfigRootDir: "./",
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "sort-imports": [
      "error",
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"],
        allowSeparatedGroups: false,
      },
    ],
    "import/order": [
      "error",
      {
        pathGroups: [
          {
            pattern: "@config/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@hooks/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@components/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@services/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@utility/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@theme/**",
            group: "parent",
            position: "before",
          },
          {
            pattern: "@assets/**",
            group: "parent",
            position: "before",
          },
        ],
      },
    ],
  },
};
