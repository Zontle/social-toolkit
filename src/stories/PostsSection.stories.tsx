import { ComponentStory, ComponentMeta } from "@storybook/react";

import { PostsSection } from "../components/molecules/postsSection";

import "../styles/fragments/_postSection.scss";
import "../styles/fragments/_cardPosts.scss";
import { CardPosts } from "../components/molecules/cardPosts";

export default {
  title: "Poster/PostsSection",
  component: PostsSection,
} as ComponentMeta<typeof PostsSection>;

const Template: ComponentStory<typeof PostsSection> = (args) => (
  <PostsSection {...args} />
);

export const PostSection = Template.bind({});
PostSection.args = {
  children: (
    <CardPosts user="" username="" files={[]} content="" publishTime="" />
  ),
};
