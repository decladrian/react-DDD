import { Group } from '../domain/Group';

export class GroupRepository implements Group.useCases {
  private readonly basePath = '../../MOCKS/';

  find(groupId) {
    // @ts-ignore
    return import(this.basePath.concat('group.json'));
  }

  findAll() {
    // @ts-ignore
    return import(this.basePath.concat('group-collection.json'));
  }

  create(model) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  edit(model) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  addAmin(userId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  removeAdmin(userId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  joinGroup(groupId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  unjoinGroup(groupId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  banUser(userId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }

  invite(userId) {
    // @ts-ignore
    return import(this.basePath.concat('response-action.json'));
  }
}
