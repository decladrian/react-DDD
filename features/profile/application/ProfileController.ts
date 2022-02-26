import { container } from '../../../container';
import { Controller } from '../../../shared';
import { UserModel } from '../domain/UserModel';
import { ProfileEntity } from '../domain/ProfileEntity';

export class ProfileController
  extends Controller
  implements UserModel.useCases
{
  private readonly repository = container.profileRepository;
  private prefix = 'PROFILE';

  async find() {
    return this.query.execute(this.prefix, () => this.repository.find());
  }

  async edit(profile) {
    const profileEntity = new ProfileEntity(profile);
    if (!profileEntity.validate()) {
      throw new Error('Invalid user data');
    }
    return this.command.execute(
      this.prefix.concat('_EDIT'),
      () => this.repository.edit(profile),
      { payload: profileEntity }
    );
  }
}
