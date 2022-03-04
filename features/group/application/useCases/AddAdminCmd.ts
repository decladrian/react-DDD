import { Command, ValidationError } from '../../../../shared';
import { container } from '../../../../container';

export class CreateGroupCmd extends Command<bumber> {
  private readonly repository = container.groupRepository;

  action = (payload: number): Promise<any> => {
    return this.repository.addAmin(payload);
  };

  async invoke(payload: number) {
    if (!payload) {
      return Promise.reject(new ValidationError('Invalid payload', {}));
    }
    return this.execute('ADD_ADMIN_CMD', this.action, {
      payload,
    });
  }
}
