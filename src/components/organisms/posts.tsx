import { FunctionComponent } from "react";
import { SidebarBottomElements, SidebarCenterElements, SidebarTopElements, Wake } from "../../constants";
import { CardPosts } from "../molecules/cardPosts";
import { Menu } from "../molecules/menu";
import { PostsSection } from "../molecules/postsSection";

interface PostsProps {}

export const Posts: FunctionComponent<PostsProps> = () => {
  return (
    <Menu
      topIcons={SidebarTopElements}
      centerIcons={SidebarCenterElements}
      bottomIcons={SidebarBottomElements}
      wake={Wake}
    >
      <PostsSection title="Timeline">
        <CardPosts
          user="Cristian"
          username="CristianGO"
          files={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostsSection>
    </Menu>
  );
};
