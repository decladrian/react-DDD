import { Controller, SemanticTypes, ValidationError } from '../../../shared';
import { Group } from '../domain/Group';
import { container } from '../../../container';
import { GroupValidator } from './GroupValidator';

export class GroupController extends Controller implements Group.useCases {
  private readonly repository = container.groupRepository;

  private prefix = 'GROUP';

  private makeTag(sufix: string) {
    return this.prefix.concat(`_${sufix.toUpperCase()}`);
  }

  find(payload) {
    return this.query.execute(
      this.makeTag('find'),
      () => this.repository.find(payload),
      {
        payload,
      }
    );
  }

  findAll() {
    return this.query.execute(
      this.makeTag('findAll'),
      () => this.repository.findAll(),
      {
        cache: true,
      }
    );
  }

  create(payload) {
    const validator = new GroupValidator(payload);
    if (!validator.validate()) {
      return Promise.reject(
        new ValidationError('Invalid payload', validator.getErrors())
      );
    }
    return this.command.execute(
      this.makeTag('create'),
      () => this.repository.create(payload),
      {
        payload,
      }
    );
  }

  edit(payload) {
    const validator = new GroupValidator(payload);
    if (!validator.validate()) {
      throw new ValidationError('Invalid payload', validator.getErrors());
    }
    return this.command.execute(
      this.makeTag('edit'),
      () => this.repository.edit(payload),
      {
        payload,
      }
    );
  }

  addAmin(payload) {
    return this.command.execute(
      this.makeTag('addAmin'),
      () => this.repository.addAmin(payload),
      {
        payload,
      }
    );
  }

  removeAdmin(payload) {
    return this.command.execute(
      this.makeTag('removeAdmin'),
      () => this.repository.removeAdmin(payload),
      {
        payload,
      }
    );
  }

  joinGroup(payload) {
    return this.command.execute(
      this.makeTag('joinGroup'),
      () => this.repository.joinGroup(payload),
      {
        payload,
      }
    );
  }

  unjoinGroup(payload) {
    return this.command.execute(
      this.makeTag('unjoinGroup'),
      () => this.repository.unjoinGroup(payload),
      {
        payload,
      }
    );
  }

  banUser(payload) {
    return this.command.execute(
      this.makeTag('banUser'),
      () => this.repository.banUser(payload),
      {
        payload,
      }
    );
  }

  invite(payload) {
    return this.command.execute(
      this.makeTag('invite'),
      () => this.repository.invite(payload),
      {
        payload,
      }
    );
  }
}
