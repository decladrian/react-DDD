import { libs } from '../../../container';

export abstract class UseCase {
  protected readonly logger = libs.Logger();

  abstract execute(...args): Promise<any>;
}
