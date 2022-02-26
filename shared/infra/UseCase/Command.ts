import { GenericError } from '../../domain/error/GenericError';
import { UseCase } from './UseCase';

export class Command extends UseCase {
  constructor(protected logger, protected alert) {
    super(logger);
  }

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { payload?: unknown }
  ): Promise<T> {
    try {
      var data = await useCaseCall();
      this.logger.log('RUN COMMAND:', key, data, settings);
    } catch (e) {
      throw new GenericError('Use Case Error');
    }
    return data;
  }
}
