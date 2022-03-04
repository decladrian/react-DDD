import { GenericError } from '../../domain/error/GenericError';
import { UseCase } from './UseCase';

export abstract class Command<ActionPayloadT> {
  constructor() {}

  abstract action: (payload: ActionPayloadT) => Promise<any>;

  async execute(
    key: string,
    useCaseCall: (...args: any) => Promise<any>,
    settings?: { payload?: unknown }
  ): Promise<any> {
    try {
      console.log('..', settings?.payload);
      var data = await useCaseCall(settings?.payload);
      //this.logger.log('RUN COMMAND:', key, data, settings);
    } catch (e) {
      alert('l');
      throw new GenericError('Use Case Error');
    }
    return data;
  }
}
