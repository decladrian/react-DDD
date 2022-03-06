import { SemanticTypes, MyApi } from '../../../shared/domain';

export namespace Group {
  export interface model {
    id?: SemanticTypes.ID;
    name: string;
    country: SemanticTypes.CODE_ISO;
    total_members: number;
    owner: summaryUser;
    admins: summaryUser[];
  }

  export type key = keyof model;

  interface summaryModel {
    id?: SemanticTypes.ID;
    name: string;
    owner: summaryUser;
    total_members: number;
  }

  export type collection = summaryModel[];

  export interface createRequest {
    id?: SemanticTypes.ID;
    name: string;
  }

  interface summaryUser {
    id: SemanticTypes.ID;
    username: string;
    avatar: string;
  }

  export interface useCases {
    find: (groupId: SemanticTypes.ID) => Promise<model>;
    findAll: () => Promise<collection>;
    create: (model: model) => MyApi.responseAction;
    edit: (model: model) => MyApi.responseAction;
    addAmin: (userId: SemanticTypes.ID) => MyApi.responseAction;
    removeAdmin: (userId: SemanticTypes.ID) => MyApi.responseAction;
    joinGroup: (groupId: SemanticTypes.ID) => MyApi.responseAction;
    unjoinGroup: (groupId: SemanticTypes.ID) => MyApi.responseAction;
  }
}
