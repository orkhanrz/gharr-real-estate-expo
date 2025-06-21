export interface ValidationErrorResponseItem<T> {
  message: string;
  path: keyof T;
}

export interface BackendError<T = {}> {
  message: string;
  type?: string;
  errors?: ValidationErrorResponseItem<T>[];
}
