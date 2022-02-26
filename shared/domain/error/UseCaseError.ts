import { ErrorTypes } from './ErrorTypes';
import { GenericError } from './GenericError';

export class UseCaseError extends GenericError {
  type: number = ErrorTypes.useCaseError;

  constructor(message: string) {
    super(message);
  }
}
