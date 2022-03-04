import { Command } from '../../../../shared';
import { container } from '../../../../container';

export class CreateGroupCmd extends Command<any> {
  private readonly repository = container.groupRepository;

  action(payload: any): Promise<any> => {
    return this.repository.create(payload);
  }

  invoke(payload: any) {
    if (!payload) {
      //throw new InvalidInvokeParameterError()
    }
    return this.execute('ADD_ADMIN_CMD', this.action , {
      payload,
    })
  }
}
