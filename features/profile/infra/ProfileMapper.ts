import { UserModel } from '../domain/UserModel';
import { ProfileFormModel } from './ProfileFormModel';
import { DateMapper } from '../../../shared/infra/libs/DateMapper';

export class ProfileMapper {
  static formToDTO(form: ProfileFormModel): UserModel.editRequest {
    return {
      ...form,
      birthday: DateMapper.nativeDateToStringFormat(
        form.birthday,
        'YYYY-MM-DD'
      ),
    };
  }
}
