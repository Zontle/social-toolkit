import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from '../components/atoms/input';

import '../styles/main.scss';

export default {
  title: 'General/Input',
  component: Input
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const RegularInput = Template.bind({});
RegularInput.args = {
  ...RegularInput.args,
  placeholder: 'This is a regular input!'
};

export const RegularTextArea = Template.bind({});
RegularTextArea.args = {
  ...RegularTextArea.args,
  type: 'textarea',
  placeholder: 'This is a regular textarea!'
};
