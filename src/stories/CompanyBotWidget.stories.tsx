import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { CompanyBotWidget } from '..';

export default {
  title: 'CompanyBotWidget',
  component: CompanyBotWidget,
  argTypes: {},
} as Meta<typeof CompanyBotWidget>;

const Template: StoryFn<typeof CompanyBotWidget> = (args) => (
  <CompanyBotWidget
    {...args}
    // primaryColor="4c7812"
    projectKey={process.env.PROJECT_KEY as string}
  />
);

export const Primary = Template.bind({});
