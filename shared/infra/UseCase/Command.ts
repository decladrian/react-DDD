import { GenericError } from '../../domain/error/GenericError';
import { UseCase } from './UseCase';

export abstract class Command<ActionPayloadT> extends UseCase {
  abstract action: (payload: ActionPayloadT) => Promise<any>;

  async execute(
    key: string,
    callAction: (...args: any) => Promise<any>,
    settings?: { payload?: unknown }
  ): Promise<any> {
    try {
      const data = await callAction(settings?.payload);
      this.logger.log('RUN COMMAND:', { key, data, settings });
      return data;
    } catch (e) {
      this.logger.log('ERRROR', e.message);
      throw new GenericError('Use Case Error');
    }
  }
}
