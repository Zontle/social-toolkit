import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PostsSection } from '../components/molecules/postsSection';

import { CardPosts } from '../components/molecules/cardPosts';
import '../styles/main.scss';
export default {
  title: 'Poster/PostsSection',
  component: PostsSection
} as ComponentMeta<typeof PostsSection>;

const Template: ComponentStory<typeof PostsSection> = args => (
  <div>
    <PostsSection {...args} />
  </div>
);

export const PostSection = Template.bind({});
PostSection.args = {
  children: [
    <CardPosts
      user="Cristian"
      username="@cristian"
      attachments={[]}
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
      publishTime="now"
    />,
    <CardPosts
      user="Cristian"
      username="@cristian"
      attachments={[]}
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
      publishTime="now"
    />,
    <CardPosts
      active
      user="Cristian"
      username="@cristian"
      attachments={[]}
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
      publishTime="now"
    />
  ]
};
