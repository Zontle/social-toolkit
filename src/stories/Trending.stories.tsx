import { ComponentStory, ComponentMeta } from '@storybook/react';
import Trending from '../components/molecules/trending';
import '../styles/main.scss';

export default {
  title: 'Poster/Trending',
  component: Trending
} as ComponentMeta<typeof Trending>;

const Template: ComponentStory<typeof Trending> = (args) => (
  <Trending {...args} />
);

export const Horizontal = Template.bind({});
const trending = ['#RealTime', '#Blog', '#Collection', '#Popular'];
Horizontal.args = {
  ...Horizontal.args,
  items: trending,
  username: 'QuinsZouls'
};
export const Vertical = Template.bind({});
Vertical.args = {
  ...Vertical.args,
  items: trending,
  layout: 'vertical',
  username: 'QuinsZouls'
};
export const CustomTitle = Template.bind({});
CustomTitle.args = {
  ...Vertical.args,
  items: trending,
  title: 'Top Trends',
  username: 'QuinsZouls'
};
