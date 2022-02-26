export abstract class Entity<T> {
  constructor(protected data: T) {}

  get(key: keyof T) {
    return this.data[key];
  }

  set(data: Partial<T>) {
    this.data = { ...this.data, ...data };
    return this;
  }

  get dto() {
    return this.data;
  }
}
