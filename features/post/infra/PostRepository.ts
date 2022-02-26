import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostLikeMock } from '../domain/mocks/post-like';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

const URL = 'https://reqres.in/api/users';

export class PostRepository implements PostModels.useCases {
  find = async (id: number) => {
    return fetch(URL)
      .then((response) => response.json())
      .then(() => PostMock);
  };

  findAll = async () => {
    return fetch(URL)
      .then((response) => response.json())
      .then(() => PostCollectionMock.posts);
  };

  save = async (post) => {
    return fetch(URL)
      .then((response) => response.json())
      .then(() => ({ ...PostSaveMock, ...post }));
  };

  like = async (id) => {
    return fetch(URL)
      .then((response) => response.json())
      .then(() => PostLikeMock);
  };
}
