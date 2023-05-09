import React from 'react';
import { Meta, StoryFn } from '@storybook/react';

import { SetuBotWidget } from '..';

export default {
  title: 'SetuBotWidget',
  component: SetuBotWidget,
  argTypes: {},
} as Meta<typeof SetuBotWidget>;

const Template: StoryFn<typeof SetuBotWidget> = (args) => (
  <SetuBotWidget {...args} projectKey={process.env.PROJECT_KEY as string} />
);

export const Primary = Template.bind({});
