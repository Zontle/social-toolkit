import React from 'react';

import { FunctionComponent } from 'react';
import { CardMessageIcon } from '../../assets/icons/cardMessage';
import { HeartIcon } from '../../assets/icons/heart';
import { RetweetIcon } from '../../assets/icons/retweet';
import { IconMenu } from '../atoms/icons';
import { Card } from './card';

export interface Attachment {
  url?: string;
  type: string;
  uid?: string;
}
export interface CardPostsProps {
  user: string;
  username: string;
  attachments?: Array<Attachment>;
  content: string;
  publishTime: string;
  active?: boolean;
}

export const CardPosts: FunctionComponent<CardPostsProps> = ({
  user,
  username,
  attachments,
  content,
  publishTime,
  active = false
}) => {
  const _renderAttachments = () => {
    return attachments?.map((attachment, i) => {
      if (attachment?.type === 'image') {
        return (
          <div className="post-files" key={i}>
            <img alt="img" src={attachment?.url} />
          </div>
        );
      }
      return <div key={i}></div>;
    });
  };
  return (
    <Card className="card-posts" active={active}>
      <div className="username-publish-time">
        <div>{user}</div>
        <div className="publish-time">{publishTime}</div>
      </div>
      <div className="username">{username}</div>
      <div className="content">
        {_renderAttachments()}
        <div>{content}</div>
      </div>

      <div className="icons">
        <div className="left-bottom-card">
          <HeartIcon
            width="17.5"
            height="16.279"
            fill="#676666"
            stroke="#676666"
            strokeWidth="0.5"
          />
          <RetweetIcon
            width="18.776"
            height="19.828"
            fill="none"
            stroke="#676666"
          />
          <CardMessageIcon
            width="19"
            height="19"
            fill="none"
            stroke="#676666"
            strokeWidth="2"
          />
        </div>
        <div className="icon-menu">
          <IconMenu />
        </div>
      </div>
    </Card>
  );
};
