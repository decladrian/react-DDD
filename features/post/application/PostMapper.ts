import { container } from '../../../container';
import { PostModels } from '../domain/PostModels';

export class PostMapper {
  static readonly DateMapper = container.DateMapper;

  static modelToDto(model: PostModels.model): PostModels.rawModel {
    return {
      ...model,
      created_at: PostMapper.DateMapper.nativeDateToStringFormat(
        model.created_at
      ),
    };
  }

  static dtoToModel(rawModel: PostModels.rawModel): PostModels.model {
    return {
      ...rawModel,
      created_at: PostMapper.DateMapper.stringFormatToNativeDate(
        rawModel.created_at
      ),
    };
  }
}
