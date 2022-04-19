import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardPosts } from '../components/molecules/cardPosts';

import '../styles/fragments/_cardPosts.scss';

export default {
  title: 'Poster/CardPost',
  component: CardPosts
} as ComponentMeta<typeof CardPosts>;

const Template: ComponentStory<typeof CardPosts> = args => (
  <CardPosts {...args} />
);

export const UserCard = Template.bind({});
UserCard.args = {
  ...UserCard.args
};
