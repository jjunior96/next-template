module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-essentials', 'storybook-addon-next-router', 'storybook-addon-next'],
  features: {
    postcss: false,
  },
  framework: '@storybook/react',
  webpackFinal: (config) => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  },
  core: {
    builder: 'webpack5',
  },
}
