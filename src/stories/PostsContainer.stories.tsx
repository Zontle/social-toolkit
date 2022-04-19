import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Posts } from '../components/organisms/posts';

import { CardPosts } from '../components/molecules/cardPosts';
import { PostsSection } from '../components/molecules/postsSection';
import '../styles/main.scss';

export default {
  title: 'Poster/Layout',
  component: Posts
} as ComponentMeta<typeof Posts>;

const Template: ComponentStory<typeof Posts> = args => (
  <Posts {...args}></Posts>
);

export const Timeline = Template.bind({});
const trending = ['#RealTime', '#Blog', '#Collection', '#Popular'];
Timeline.args = {
  ...Timeline.args,
  layout: 'timeline',
  trending,
  children: (
    <PostsSection type="row">
      <CardPosts
        active
        user="Cristian"
        username="CristianGO"
        attachments={[]}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
        publishTime="now"
      />
      <CardPosts
        user="Cristian"
        username="CristianGO"
        attachments={[]}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
        publishTime="now"
      />
      <CardPosts
        user="Cristian"
        username="CristianGO"
        attachments={[]}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
        publishTime="now"
      />
    </PostsSection>
  )
};

export const Regular = Template.bind({});
Regular.args = {
  ...Regular.args,
  layout: 'regular',
  trending,
  children: (
    <>
      {' '}
      <PostsSection type="column" title="Timeline">
        <CardPosts
          active
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <CardPosts
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <CardPosts
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostsSection>
      <PostsSection type="column" title="News">
        <CardPosts
          active
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <CardPosts
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostsSection>
    </>
  )
};
