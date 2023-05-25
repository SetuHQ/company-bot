export const parameters = {
  actions: { argTypesRegex: '^on.*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

const withTheme = (StoryFn, context) => {
  const { theme } = context.parameters;

  return <StoryFn />;
};

export const decorators = [withTheme];
