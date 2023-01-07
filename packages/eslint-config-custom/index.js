module.exports = {
  extends: ["next", "turbo", "airbnb", "airbnb-typescript", "prettier"],
  parserOptions: {
    project: "./tsconfig.json",
    // tsconfigRootDir: __dirname,
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/jsx-key": "off",
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "import/prefer-default-export˘": "off",
    "import/prefer-default-export": "warn",
    "react/jsx-props-no-spreading": "off",
    "no-unneeded-ternary": "off",
  },
};
