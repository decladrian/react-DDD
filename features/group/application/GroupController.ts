import { Controller, SemanticTypes, ValidationError } from '../../../shared';
import { Group } from '../domain/Group';

import { CreateGroupCmd } from './useCases/CreateGroupCmd';

export class GroupController {
  create(payload) {
    return new CreateGroupCmd().invoke(payload);
  }
}
