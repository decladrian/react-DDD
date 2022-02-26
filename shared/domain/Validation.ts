export class Validation {
  static isValidEmail(email: string) {
    return email && email.length > 4;
  }

  static isValidDni(dni: string) {
    return dni.length > 6;
  }

  static isValidName(name: string, minLength = 3) {
    return name.length >= minLength;
  }
}
