export abstract class Validator<T> {
  protected errors = {} as any;

  abstract validations: { [k in keyof T]?: () => boolean };

  getErrors() {
    return this.errors;
  }

  validate() {
    this.errors = {};
    Object.keys(this.validations).forEach((key: string) => {
      this.validations[key]();
    });

    return Object.keys(this.errors).length === 0;
  }
}
