import { Controller } from '../../../shared';
import { Group } from '../domain/Group';
import { GroupValidator } from './GroupValidator';

import { CreateGroupCmd } from './useCases/CreateGroupCmd';

export class GroupController extends Controller {
  create(payload: Group.createRequest) {
    return new CreateGroupCmd().run(payload as any);
  }

  validateProp(prop: Group.key, model: Group.createRequest) {
    const validator = new GroupValidator(model as any);
    validator.validations[prop]();
    return validator.getErrors();
  }
}
