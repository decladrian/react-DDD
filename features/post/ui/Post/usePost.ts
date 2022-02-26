import { useEffect, useState } from 'react';
import { PostController } from '../../application/PostController';
import { PostMapper } from '../../application/PostMapper';

export const usePost = () => {
  const [post, setPost] = useState<any>(null);

  useEffect(() => {
    const mockPostId = 1;
    new PostController().find(mockPostId).then((post) => setPost(post));
  }, []);

  return {
    post,
  };
};
