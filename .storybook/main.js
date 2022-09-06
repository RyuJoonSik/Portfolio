module.exports = {
  stories: [
    // "../stories/**/*.stories.mdx",
    "../components/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-links",
    "@storybook/addon-interactions",
    "@storybook/addon-viewport",
    "@storybook/addon-a11y",
    "storybook-addon-react-router-v6",
    // "storybook-addon-styled-component-theme/dist/preset",
    "@react-theming/storybook-addon",
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
};
