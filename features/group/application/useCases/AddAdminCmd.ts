import { Command } from '../../../../shared';
import { container } from '../../../../container';

export class AddAdminCmd extends Command<number> {
  private readonly repository = container.groupRepository;

  action(payload: number): any => {
    return this.repository.addAmin(payload);
  }

  invoke(payload: an) {
    if (!payload) {
      //throw new InvalidInvokeParameterError()
    }
    return this.execute('ADD_ADMIN_CMD', this.action , {
      payload,
    })
  }
}
