import React from 'react';

import { FunctionComponent } from 'react';
import { IconMenuPostSection } from '../atoms/icons';

export interface PostsSectionProps {
  title?: string;
  type?: 'column' | 'row';
  children?: React.ReactNode;
}

export const PostsSection: FunctionComponent<PostsSectionProps> = ({
  title = '',
  children,
  type = 'column'
}) => {
  if (type === 'row') {
    return (
      <div className={`post-section ${type}`}>
        <div className="container">{children}</div>
      </div>
    );
  }
  return (
    <div className={`post-section ${type}`}>
      <div className="container">
        <div className="top-post">
          {title && <h1>{title}</h1>}
          <IconMenuPostSection size="2x" />
        </div>
        {children}
      </div>
    </div>
  );
};
