import { APIError } from '../types/api';

export class AppError extends Error {
  code: string;
  status?: number;

  constructor(error: APIError) {
    super(error.message);
    this.code = error.code;
    this.status = error.status;
  }
}

export const isAppError = (error: unknown): error is AppError => {
  return error instanceof AppError;
};