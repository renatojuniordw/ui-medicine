import { AxiosRequestConfig } from 'axios';

export interface ApiResponse<T = any> {
  data: T;
  status: number;
  headers: any;
  config: AxiosRequestConfig;
}

export interface ApiError {
  response: ApiResponse;
  message: string;
}
