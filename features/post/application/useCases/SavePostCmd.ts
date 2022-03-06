import { Command, ValidationError } from '../../../../shared';
import { container } from '../../../../container';
import { PostValidator } from '../PostValidator';

export class SavePostCmd extends Command<any> {
  private readonly repository = container.postRepository;

  action = (payload: any): Promise<any> => {
    return this.repository.save(payload);
  };

  async invoke(payload: any) {
    const validator = new PostValidator(payload);
    if (!validator.validate()) {
      return Promise.reject(
        new ValidationError('Invalid payload', validator.getErrors())
      );
    }
    return this.execute('ADD_ADMIN_CMD', this.action, {
      payload,
    });
  }
}
