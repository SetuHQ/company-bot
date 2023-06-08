import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { CompanyBotWidget } from '..';

export default {
  title: 'CompanyBotWidget',
  component: CompanyBotWidget,
  argTypes: {},
} as Meta<typeof CompanyBotWidget>;

const Template: StoryFn<typeof CompanyBotWidget> = (args) => (
  <CompanyBotWidget {...args} projectKey="REPLACE_YOUR_KEY_HERE" />
);

export const Primary = Template.bind({});
