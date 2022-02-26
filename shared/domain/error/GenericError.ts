export class GenericError extends Error {
  type: number;
  constuctor(public message: string) {}
}
