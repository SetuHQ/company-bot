import { ThemeProvider } from 'fictoan-react';
import { SetuLightTheme } from '../assets/Setu.light.theme';

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

  return (
    // <ThemeProvider theme={storyTheme}>
    <StoryFn />
    // </ThemeProvider>
  );
};

export const decorators = [withTheme];
