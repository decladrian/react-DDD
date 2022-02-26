import { SemanticTypes } from '../../../shared';

export interface ProfileFormModel {
  email: SemanticTypes.EMAIL;
  username: string;
  birthday: Date;
}
