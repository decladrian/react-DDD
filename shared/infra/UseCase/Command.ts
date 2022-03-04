import { GenericError } from '../../domain/error/GenericError';
import { UseCase } from './UseCase';

export abstract class Command<ActionPayloadT> {
  constructor(protected logger, protected alert) {}

  abstract action(payload: ActionPayloadT): Promise<any>;

  async execute(
    key: string,
    useCaseCall: (...args: any) => Promise<any>,
    settings?: { payload?: unknown }
  ): Promise<any> {
    try {
      var data = await useCaseCall(settings?.payload);
      this.logger.log('RUN COMMAND:', key, data, settings);
    } catch (e) {
      alert(e.message);
      throw new GenericError('Use Case Error');
    }
    return data;
  }
}
