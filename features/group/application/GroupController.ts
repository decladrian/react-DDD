import { Controller, SemanticTypes, ValidationError } from '../../../shared';
import { Group } from '../domain/Group';
import { container } from '../../../container';
import { GroupValidator } from './GroupValidator';

export class GroupController extends Controller implements Group.useCases {
  private readonly repository = container.groupRepository;

  private prefix = 'GROUP';

  find(payload) {
    return this.query.execute(
      this.prefix.concat('find'),
      () => this.repository.find(payload),
      {
        payload,
      }
    );
  }

  findAll() {
    return this.query.execute(
      this.prefix.concat('findAll'),
      () => this.repository.findAll(),
      {
        cache: true,
      }
    );
  }

  create(payload) {
    const validator = new GroupValidator(payload);
    if (!validator.validate()) {
      throw new ValidationError('Invalid payload', validator.getErrors());
    }
    return this.command.execute(
      this.prefix.concat('create'),
      () => this.repository.create(payload),
      {
        payload,
      }
    );
  }

  edit(payload) {
    const validator = new ValidatorGroup(payload);
    if (!validator.validate()) {
      throw new ValidationError('Invalid payload', validator.getErrors());
    }
    return this.command.execute(
      this.prefix.concat('edit'),
      () => this.repository.edit(payload),
      {
        payload,
      }
    );
  }

  addAmin(payload) {
    return this.command.execute(
      this.prefix.concat('addAmin'),
      () => this.repository.addAmin(payload),
      {
        payload,
      }
    );
  }

  removeAdmin(payload) {
    return this.command.execute(
      this.prefix.concat('removeAdmin'),
      () => this.repository.removeAdmin(payload),
      {
        payload,
      }
    );
  }

  joinGroup(payload) {
    return this.command.execute(
      this.prefix.concat('joinGroup'),
      () => this.repository.joinGroup(payload),
      {
        payload,
      }
    );
  }

  unjoinGroup(payload) {
    return this.command.execute(
      this.prefix.concat('unjoinGroup'),
      () => this.repository.unjoinGroup(payload),
      {
        payload,
      }
    );
  }

  banUser(payload) {
    return this.command.execute(
      this.prefix.concat('banUser'),
      () => this.repository.banUser(payload),
      {
        payload,
      }
    );
  }

  invite(payload) {
    return this.command.execute(
      this.prefix.concat('invite'),
      () => this.repository.invite(payload),
      {
        payload,
      }
    );
  }
}
