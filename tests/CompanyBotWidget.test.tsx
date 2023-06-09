import React from 'react';
import { render } from '@testing-library/react';
import { CompanyBotWidget } from '../src/CompanyBotWidget/CompanyBotWidget';

const defaultProps = {
  projectKey: '123456',
  primaryColor: '6B92BA',
  helperText: 'This is a test description',
  name: 'This is a test heading',
};
describe('CompanyBotWidget', () => {
  it('renders CompanyBotWidget component', () => {
    render(<CompanyBotWidget {...defaultProps} />);
  });
});
