import React from 'react';

import { FunctionComponent } from 'react';
import { IconMenuPostSection } from '../atoms/icons';

export interface PostsSectionProps {
  title?: string;
  type?: 'column' | 'row';
  children?: React.ReactNode;
  noIcons?: boolean;
  className?: string;
}

export const PostsSection: FunctionComponent<PostsSectionProps> = ({
  title = '',
  children,
  type = 'column',
  noIcons = false,
  className = ''
}) => {
  if (type === 'row') {
    return (
      <div className={`post-section ${className} ${type}`}>
        <div className="container">{children}</div>
      </div>
    );
  }
  return (
    <div className={`post-section ${className} ${type}`}>
      <div className="top-post">
        {title && <h1>{title}</h1>}
        {!noIcons && <IconMenuPostSection size="2x" />}
      </div>
      <div className="container">{children}</div>
    </div>
  );
};
