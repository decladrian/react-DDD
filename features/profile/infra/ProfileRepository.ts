import { EditUserMock } from '../domain/mocks/edit-user';
import { UserMock } from '../domain/mocks/user';
import { UserModel } from '../domain/UserModel';

export class ProfileRepository implements UserModel.useCases {
  async find() {
    return UserMock;
  }

  async edit(profile) {
    return EditUserMock;
  }
}
