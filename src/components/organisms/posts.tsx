import React from 'react';

import { FunctionComponent } from 'react';
import {
  SidebarBottomElements,
  SidebarCenterElements,
  SidebarTopElements,
  Wake
} from '../../constants';
import { MenuOnChange } from '../../types';
import Menu from '../molecules/menu';
import TextPost from '../molecules/TextPost';
import Trending from '../molecules/trending';

export interface PostsProps {
  layout?: 'regular' | 'timeline';
  trending?: Array<string>;
  children?: React.ReactNode;
  active?: 'notifications' | 'home' | 'settings' | 'messages';
  onSelect?: MenuOnChange | Function;
}

export const Posts: FunctionComponent<PostsProps> = ({
  layout = 'regular',
  children,
  trending = [],
  active,
  onSelect
}) => {
  const _renderLayout = () => {
    if (layout === 'regular') {
      return <>{children}</>;
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
      active={active}
      onChange={onSelect}
    >
      {_renderLayout()}
    </Menu>
  );
};
