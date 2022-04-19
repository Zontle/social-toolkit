import { Posts } from './components/organisms/posts';

import { CardPosts } from './components/molecules/cardPosts';
import { PostsSection } from './components/molecules/postsSection';
import React from 'react';

function App() {
  const trending = ['#RealTime', '#Blog', '#Collection', '#Popular'];
  return (
    <Posts layout="timeline" trending={trending}>
      <PostsSection type="row">
        <CardPosts
          active
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <CardPosts
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <CardPosts
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostsSection>
    </Posts>
  );
}

export default App;
