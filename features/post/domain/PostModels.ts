import { SemanticTypes } from '../../../shared';

export namespace PostModels {
  export interface model {
    id?: SemanticTypes.ID;
    user: SemanticTypes.ID;
    title: string;
    content: string;
    created_at: Date;
  }

  export interface rawModel extends Omit<model, 'created_at'> {
    created_at: SemanticTypes.DATEFORMAT_YYYY_MM_DDD;
  }

  export type collection = rawModel[];

  export type saveResponse = { success: boolean };

  export type saveRequest = {
    id?: SemanticTypes.ID;
    title: string;
    content: string;
    created_at: Date;
  };

  export interface rawSaveRequest extends Omit<saveRequest, 'created_at'> {
    created_at: SemanticTypes.DATEFORMAT_YYYY_MM_DDD;
  }

  export type likeResponse = { success: boolean; like: boolean };

  export type likeRequest = { id: SemanticTypes.ID };

  export interface useCases {
    find: (id: SemanticTypes.ID) => Promise<rawModel>;
    findAll: () => Promise<collection>;
    save: (post: saveRequest) => Promise<saveResponse>;
    like: (id: SemanticTypes.ID) => Promise<likeResponse>;
  }

  export type key = keyof model;

  export type modelValidations = {
    [k in keyof PostModels.model]?: () => boolean;
  };

  export type errors = {
    [k in keyof PostModels.model]?: string;
  };
}
