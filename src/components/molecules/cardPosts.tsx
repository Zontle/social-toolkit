import { FunctionComponent } from "react";
import { IconComment, IconHeart, IconMenu, IconRetweet } from "../atoms/icons";
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
        <div>
          <IconHeart />
          <IconRetweet />
          <IconComment />
        </div>
        <div className="icon-menu">
          <IconMenu />
        </div>
      </div>
    </Card>
  );
};
