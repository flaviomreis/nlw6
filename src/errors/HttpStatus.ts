export class HttpStatus implements Error {
  name: string;
  message: string;
  code: number;

  constructor(message: string, code: number) {
    this.message = message;
    this.name = 'HttpStatusError';
    this.code = code;
  }
}