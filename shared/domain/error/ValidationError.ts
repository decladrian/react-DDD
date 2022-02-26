import { ErrorTypes } from './ErrorTypes';
import { GenericError } from './GenericError';

export class ValidationError extends GenericError {
  type: number = ErrorTypes.invalidDataExecption;

  constructor(message: string, public errors: object) {
    super(message);
  }
}
