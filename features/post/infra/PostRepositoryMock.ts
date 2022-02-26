import { libs } from '../../../container';
import { PostMock } from '../domain/mocks/post';
import { PostCollectionMock } from '../domain/mocks/post-collection';
import { PostLikeMock } from '../domain/mocks/post-like';
import { PostSaveMock } from '../domain/mocks/post-save';
import { PostModels } from '../domain/PostModels';

export class PostRepositoryMock implements PostModels.useCases {
  private readonly logger = libs.Logger;

  find = async (id: number) => {
    this.logger.log('FIND MOCK post ', id);
    return PostMock;
  };

  findAll = async () => {
    this.logger.log('FINDALL MOCK posts');
    return PostCollectionMock.posts;
  };

  save = async (post) => {
    this.logger.log('SAVE MOCK post', post);
    return PostSaveMock;
  };

  like = async (id) => {
    this.logger.log('LIKE MOCK post', id);
    return PostLikeMock;
  };
}
