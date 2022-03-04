import { Controller, SemanticTypes, ValidationError } from '../../../shared';
import { Group } from '../domain/Group';
import { container } from '../../../container';
import { GroupValidator } from './GroupValidator';
import { CreateGroupCmd } from './useCases/CreateGroupCmd';

export class GroupController implements Group.useCases {

  create(payload) {
    return new CreateGroupCmd().invoke(payload);
  }

  

}
