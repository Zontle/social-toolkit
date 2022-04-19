import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/atoms/button';

import '../styles/main.scss';

export default {
  title: 'General/Button',
  component: Button
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = args => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  ...Primary.args,
  type: 'primary',
  children: 'Hi'
};
