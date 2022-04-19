# social-toolkit

A series of components for interacting with social-media applications



### Installation

With npm:

```bash
npm i https://github.com/Zontle/social-toolkit
```

with yarn

```bash
yarn add https://github.com/Zontle/social-toolkit
```

After that, link CSS files:



In CSS file:

```css
@import '~social-toolkit/lib/index.css';
```

In Javascript/Typescript:

```js
import 'social-toolkit/lib/index.css';

```

### Usage

```jsx
import React from 'react';
import { PostContainer, Post } from 'social-toolkit';

const YourComponent = () => {
  return (
    <div>
      <PostContainer type="column" title="Timeline">
        <Post
          active
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <Post
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <Post
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostContainer>
      <PostContainer type="column" title="News">
        <Post
          active
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
        <Post
          user="Cristian"
          username="CristianGO"
          attachments={[]}
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quo voluptate odio aliquid maxime amet commodi tenetur possimus et perferendis."
          publishTime="now"
        />
      </PostContainer>
    </div>
  );
};

export default YourComponent;

```
