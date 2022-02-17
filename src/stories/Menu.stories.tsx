import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Menu } from "../components/molecules/menu";
import { SidebarBottomElements, SidebarCenterElements, SidebarTopElements, Wake } from "../constants";

import "../styles/fragments/_menu.scss";

export default {
  title: "Poster/Menu",
  component: Menu,
} as ComponentMeta<typeof Menu>;

const Template: ComponentStory<typeof Menu> = (args) => (
  <Menu {...args} />
);

export const MenuSection = Template.bind({});
MenuSection.args = {
  topIcons: SidebarTopElements,
  centerIcons: SidebarCenterElements,
  bottomIcons: SidebarBottomElements,
  wake: Wake
};
