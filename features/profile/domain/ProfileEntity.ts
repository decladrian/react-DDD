import { UserModel } from './UserModel';
import { Entity } from '../../../shared';

export class ProfileEntity extends Entity<UserModel.model> {
  validate() {
    // Validaciones...
    // Esto no puede no fallar
    return Object.keys(this.errors).length === 0;
  }
}
