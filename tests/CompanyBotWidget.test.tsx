import React from 'react';
import { render } from '@testing-library/react';
import { CompanyBotWidget } from '../src/CompanyBotWidget/CompanyBotWidget';

const defaultProps = {
  projectKey: '123456',
  primaryColor: '000000',
  description: 'This is a test description',
  heading: 'This is a test heading',
};
describe('SetuAIWidget', () => {
  it('renders SetuAIWidget component', () => {
    render(<CompanyBotWidget {...defaultProps} />);
  });
});
