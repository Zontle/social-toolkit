import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextPost from '../components/molecules/TextPost';

import '../styles/fragments/_textPost.scss';

export default {
  title: 'Poster/PostsSection',
  component: TextPost,
} as ComponentMeta<typeof TextPost>;

const Template: ComponentStory<typeof TextPost> = (args) => (
  <div style={{ maxWidth: 553 }}>
    <TextPost {...args} />
  </div>
);

export const TextPostSection = Template.bind({
  title: 'Text Section',
});

TextPostSection.args = {
  ...TextPostSection.args,
};
