import { FunctionComponent } from "react";
import { CardMessageIcon } from "../../assets/icons/cardMessage";
import { HeartIcon } from "../../assets/icons/heart";
import { RetweetIcon } from "../../assets/icons/retweet";
import { IconMenu } from "../atoms/icons";
import { Card } from "./card";

interface CardPostsProps {
  user: string;
  username: string;
  files?: Array<string>;
  content: string;
  publishTime: string;
}

export const CardPosts: FunctionComponent<CardPostsProps> = ({
  user,
  username,
  files,
  content,
  publishTime,
}) => {
  return (
    <Card className="card-posts">
      <div className="username-publish-time">
        <div>{user}</div>
        <div className="publish-time">{publishTime}</div>
      </div>
      <div className="username">{username}</div>
      <div className="content">
        {/* <div className="post-files">
          <img alt="img" src={require("../../assets/images/img-2.jpg")} />
        </div> */}

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
