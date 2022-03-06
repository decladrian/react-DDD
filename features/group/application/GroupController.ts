import { Controller, SemanticTypes } from '../../../shared';
import { Group } from '../domain/Group';

import { CreateGroupCmd } from './useCases/CreateGroupCmd';

export class GroupController {
  create(payload: Group.createRequest) {
    return new CreateGroupCmd().run(payload);
  }
}
