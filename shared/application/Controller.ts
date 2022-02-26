import { container, libs } from '../../container';

export class Controller {
  protected readonly logger = libs.Logger;
  protected readonly query = container.Query;
  protected readonly command = container.Command;
}
