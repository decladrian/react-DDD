import { Command, ValidationError } from '../../../../shared';
import { container } from '../../../../container';
import { GroupValidator } from '../GroupValidator';
import { Group } from '../../domain/Group';

export class CreateGroupCmd extends Command<any> {
  private readonly repository = container.groupRepository;

  action = (payload: any): Promise<any> => {
    return this.repository.create(payload);
  };

  async run(payload: Group.model) {
    const validator = new GroupValidator(payload);
    if (!validator.validate()) {
      return Promise.reject(
        new ValidationError('Invalid payload', validator.getErrors())
      );
    }
    return this.execute('ADD_ADMIN_CMD', this.action, {
      payload,
    });
  }
}
