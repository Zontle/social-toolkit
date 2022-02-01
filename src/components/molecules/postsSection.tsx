import { FunctionComponent } from "react";
import { IconMenuPostSection } from "../atoms/icons";

interface PostsSectionProps {
  title: string;
}

export const PostsSection: FunctionComponent<PostsSectionProps> = ({
  title,
  children,
}) => {
  return (
    <div className="post-section">
      <div className="container">
        <div className="top-post">
          <h1>{title}</h1>
          <IconMenuPostSection size="2x"/>
        </div>
        {children}
      </div>
    </div>
  );
};
