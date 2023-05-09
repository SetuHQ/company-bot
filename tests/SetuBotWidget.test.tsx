import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'fictoan-react';
import { SetuLightTheme } from '../assets/Setu.light.theme';
import { SetuBotWidget } from '../src';

const defaultProps = {
  projectKey: '123456',
  primaryColor: '#000000',
  secondaryColor: '#ffffff',
  description: 'This is a test description',
  heading: 'This is a test heading',
};
describe('SetuAIWidget', () => {
  it('renders SetuAIWidget component', () => {
    render(
      <ThemeProvider theme={SetuLightTheme}>
        <SetuBotWidget {...defaultProps} />
      </ThemeProvider>
    );
  });
});
