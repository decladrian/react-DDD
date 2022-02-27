import { Validator } from '../../../shared/application/Validator';
import { PostModels } from '../domain/PostModels';

export class PostValidator extends Validator<PostModels.saveRequest> {
  constructor(private data: PostModels.saveRequest) {
    super();
  }

  validations = {
    title: () => {
      delete this.errors.title;
      if (this.data.title.length < 3) {
        this.errors.title = 'Min length 3';
        return false;
      }
      return true;
    },
    content: () => {
      delete this.errors.content;
      if (this.data.content.length < 3) {
        this.errors.content = 'Min length 3';
        return false;
      }
      return true;
    },
  };
}
