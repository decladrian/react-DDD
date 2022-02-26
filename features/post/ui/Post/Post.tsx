import React, { ReactNode } from 'react';
import { usePost } from '../Post/usePost';

export const Post: ReactNode = () => {
  const { post } = usePost();

  return (
    <main>
      {post && (
        <div>
          {post.title} - {post.content} - {post.created_at}
        </div>
      )}
    </main>
  );
};
