import { SemanticTypes } from '../../shared/domain/SemainticType';

type CacheRecord = {
  [key: string]: {
    payload: any;
    added_at: SemanticTypes.DATETIME;
    expire_at?: SemanticTypes.DATETIME;
  };
};

export class InMemoryCache {
  static dir: CacheRecord = {};

  static get(tag) {
    const cache = this.dir[tag];
    if (!cache) {
      return;
    }
    if (cache && new Date().getTime() > cache.expire_at) {
      console.log('-Cache', tag);
      this.remove(tag);
      return;
    }
    return cache.payload;
  }

  static set(tag: string, payload, expire_at?: SemanticTypes.DATETIME) {
    this.dir[tag] = { payload, added_at: new Date().getTime(), expire_at };
  }

  static remove(tag) {
    delete this.dir[tag];
  }
}
