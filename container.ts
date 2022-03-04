import { PostModels } from './features/post/domain/PostModels';
import { PostRepository } from './features/post/infra/PostRepository';
import { PostRepositoryMock } from './features/post/infra/PostRepositoryMock';
import { UserModel } from './features/profile/domain/UserModel';
import { ProfileRepository } from './features/profile/infra/ProfileRepository';
import { Analytics } from './shared/infra/libs/Analytics';
import { PostSubscriber } from './features/post/infra/PostSbuscriber';
import { Command, Query, Subject } from './shared';
import { InMemoryCache } from './shared/infra/Cache';
import { DateMapper } from './shared/infra/libs/DateMapper';
import { Group, GroupRepository } from './features/group';

export interface Contanier {
  postRepository: PostModels.useCases;
  profileRepository: UserModel.useCases;
  groupRepository: Group.useCases;
  Query: Query;
  postSubscriber: PostSubscriber;
  DateMapper: DateMapper;
}

export const libs = {
  Logger: () => console,
  analytics: Analytics,
  Subject,
  CacheQuery: InMemoryCache,
};

const infra = {
  postRepository: new PostRepository(),
  profileRepository: new ProfileRepository(),
  groupRepository: new GroupRepository(),
  //@ts-ignore
  postSubscriber: new PostSubscriber(new Subject(() => {})),
  Query: new Query(libs.Logger),
  DateMapper: new DateMapper(),
};

const mocks = {
  postRepository: new PostRepositoryMock(),
};

export const container: Contanier = { ...infra, ...mocks };
