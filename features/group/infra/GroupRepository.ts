import { Group } from '../domain/Group';

export class GroupRepository implements Group.useCases {
  private readonly basePath = '../../FAKE_SERVER/';

  private loadJson(file: string) {
    // @ts-ignore
    return import(this.basePath.concat(file));
  }

  find(groupId) {
    return this.loadJson('group.json');
  }

  findAll() {
    return this.loadJson('group-collection.json');
  }

  create(model) {
    return this.loadJson('response-action.json');
  }

  edit(model) {
    return this.loadJson('response-action.json');
  }

  addAmin(userId) {
    return this.loadJson('response-action.json');
  }

  removeAdmin(userId) {
    return this.loadJson('response-action.json');
  }

  joinGroup(groupId) {
    return this.loadJson('response-action.json');
  }

  unjoinGroup(groupId) {
    return this.loadJson('response-action.json');
  }

  banUser(userId) {
    return this.loadJson('response-action.json');
  }

  invite(userId) {
    return this.loadJson('response-action.json');
  }
}
