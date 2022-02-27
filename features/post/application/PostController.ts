import { container } from '../../../container';
import { Controller, SemanticTypes, ValidationError } from '../../../shared';
import { PostModels } from '../domain/PostModels';
import { PostValidator } from './PostValidator';

export class PostController extends Controller implements PostModels.useCases {
  private readonly repository = container.postRepository;
  //private readonly postSubscriber = container.postSubscriber;
  private prefix = 'POST';

  save(payload: PostModels.saveRequest) {
    const validator = new PostValidator(payload);
    if (!validator.validate()) {
      throw new ValidationError('Invalid payload', validator.getErrors());
    }
    return this.command.execute(
      this.prefix.concat('_SAVE'),
      () => this.repository.save(payload),
      {
        payload,
      }
    );
  }

  like(payload: SemanticTypes.ID) {
    return this.command.execute(
      this.prefix.concat('_LIKE'),
      () => this.repository.like(payload),
      {
        payload,
      }
    );
  }

  find(payload: SemanticTypes.ID) {
    return this.query.execute(
      this.prefix,
      () => this.repository.find(payload),
      { payload, cache: true }
    );
  }

  findAll() {
    return this.query.execute(this.prefix.concat('_COLLECTION'), () =>
      this.repository.findAll()
    );
  }
}
