import { libs } from '../../../container';
import { GenericError } from '../../domain/error/GenericError';
import { UseCase } from './UseCase';

export class Query extends UseCase {
  private readonly cacheQuery = libs.CacheQuery;

  async execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { payload?: any; cache?: boolean }
  ): Promise<T> {
    const { payload, cache } = settings;
    const cacheKey = btoa(key.concat(JSON.stringify({ payload })));
    const cacheRecord = this.cacheQuery.get(cacheKey);
    if (cache && cacheRecord) {
      return cacheRecord as T;
    }
    try {
      const data = (await useCaseCall()) as T;
      if (cache) {
        this.cacheQuery.set(cacheKey, data);
      }
      return data;
    } catch {
      throw new GenericError('UseCaseError!');
    }
  }
}
