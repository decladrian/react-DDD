export abstract class UseCase {
  constructor(protected logger) {}

  abstract execute<T>(
    key: string,
    useCaseCall: () => Promise<T>,
    settings?: { payload?: any }
  ): Promise<T>;
}
