import { FunctionComponent } from "react";

interface PostsSectionProps {
  title: string;
}

export const PostsSection: FunctionComponent<PostsSectionProps> = ({
  title,
  children
}) => {
  return (
    <div className="post-section">
      <div className="container">
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};
