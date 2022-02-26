import { SemanticTypes } from './SemainticType';

export namespace MyApi {
  export type responseAction = Promise<{
    id?: SemanticTypes.ID;
    message?: string;
    success: boolean;
  }>;
}
