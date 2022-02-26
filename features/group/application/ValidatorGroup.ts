import { Group } from '..';
import { Validator } from '../../../shared/application/Validator';

export class ValidatorGroup extends Validator<Group.model> {
  constructor(private data: Group.model) {
    super();
  }

  validations = {
    name: () => {
      delete this.errors.name;
      if (this.data.name.length < 3) {
        this.errors.name = 'Min length 3';
        return false;
      }
      return true;
    },
  };
}
