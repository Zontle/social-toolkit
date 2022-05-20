import React from 'react';
import dayjs, {type Dayjs} from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime'
import { FunctionComponent } from 'react';
import { CardMessageIcon } from '../../assets/icons/cardMessage';
import { HeartIcon } from '../../assets/icons/heart';
import { RetweetIcon } from '../../assets/icons/retweet';
import { IconMenu } from '../atoms/icons';
import { Card } from './card';
import { parseTimeFromNow } from '../../utils/time';
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
  publishTime: React.ReactNode | Dayjs | string;
  active?: boolean;
}
const CHAR_CONTENT_LIMIT = 280;
dayjs.extend(relativeTime);

export const CardPosts: FunctionComponent<CardPostsProps> = ({
  user,
  username,
  attachments = [],
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
  const _parseContent = () => {
    if (typeof content === 'string') {
      //Limit number of characters
      if (content.length > CHAR_CONTENT_LIMIT) {
        if (attachments.length > 0) {
          return content.substring(0, CHAR_CONTENT_LIMIT - 150) + '...'
        }
        return content.substring(0, CHAR_CONTENT_LIMIT) + '...'
      }
    }
    return content
  }
  return (
    <Card
      className={`card-posts ${attachments?.length > 0 ? 'media' : ''}`}
      active={active}
    >
      <div className='post-content'>
        <div className="username-publish-time">
          <div>{user}</div>
          <div className="publish-time">{parseTimeFromNow(publishTime)}</div>
        </div>
        <div className="username">{username}</div>
        <div className="content">
          {_renderAttachments()}
          <div>{_parseContent()}</div>
        </div>
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
