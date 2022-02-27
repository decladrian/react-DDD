import { Group } from '../domain/Group';

export class GroupRepository implements Group.useCases {
  find(groupId) {
    return import('../../../FAKE_SERVER/group.json');
  }

  findAll() {
    return import('../../../FAKE_SERVER/group-collection.json');
  }

  create(model) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  edit(model) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  addAmin(userId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  removeAdmin(userId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  joinGroup(groupId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  unjoinGroup(groupId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  banUser(userId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }

  invite(userId) {
    return import('../../../FAKE_SERVER/response-action.json');
  }
}
