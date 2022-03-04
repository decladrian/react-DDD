import { SemanticTypes } from "../../../../shared/domain";
import {Command }from '../../../../shared';
import {container }from '../../../../container';


export class AddAdminCmd extends Command {

  private readonly repository = container.groupRepository;

  action(payload) {
    return this.repository.addAmin(payload);
  }

  invoke(payload: any) {
    return this.execute(
      "ADD_ADMIN_CMD",
      () => this.action(payload),
      {
        payload,
      }
    );
  }
}


// new AddAdminCmd({).invoke(payload)