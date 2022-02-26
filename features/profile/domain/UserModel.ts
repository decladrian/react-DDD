import { SemanticTypes } from '../../../shared';

export namespace UserModel {
  export interface model {
    id: SemanticTypes.ID;
    email: SemanticTypes.EMAIL;
    username: string;
    birthday: SemanticTypes.DATEFORMAT_YYYY_MM_DDD;
  }

  export type key = keyof Omit<model, 'id'>;

  export type editRequest = Omit<model, 'id'>;

  export type editResponse = { success: boolean };

  export interface useCases {
    find: () => Promise<model>;
    edit: (user: editRequest) => Promise<editResponse>;
  }
}
