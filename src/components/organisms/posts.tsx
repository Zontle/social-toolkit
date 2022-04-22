import React from 'react';

import { FunctionComponent } from 'react';
import {
  SidebarBottomElements,
  SidebarCenterElements,
  SidebarTopElements,
  Wake
} from '../../constants';
import Menu from '../molecules/menu';
import TextPost from '../molecules/TextPost';
import Trending from '../molecules/trending';

export interface PostsProps {
  layout?: 'regular' | 'timeline';
  trending?: Array<string>;
  children?: React.ReactNode;
}

export const Posts: FunctionComponent<PostsProps> = ({
  layout = 'regular',
  children,
  trending = []
}) => {
  const _renderLayout = () => {
    if (layout === 'regular') {
      return <div className="section-container">{children}</div>;
    }
    return (
      <div className="full-section">
        <div className="top-section">
          <div className="text-title">
            <h1>Timeline</h1>
            <TextPost />
          </div>
          <Trending username="QuinsZouls" items={trending} />
        </div>
        <div className="section-container">{children}</div>
      </div>
    );
  };
  return (
    <Menu
      topIcons={SidebarTopElements}
      centerIcons={SidebarCenterElements}
      bottomIcons={SidebarBottomElements}
      wake={Wake}
      active="home"
    >
      {_renderLayout()}
    </Menu>
  );
};
