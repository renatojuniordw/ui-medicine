import api from './api';

import { ApiResponse } from '../models/api.model';
import { Auth } from '../models/auth.model';
import { User } from '../models/user.model';

export const login = async (auth: Auth): Promise<ApiResponse> => {
  return await api.post<ApiResponse>(`/auth/signin`, auth);
};

export const resendConfirmationEmail = async (): Promise<ApiResponse> => {
  return await api.post<ApiResponse>(
    `/auth/resend-confirmation-email/${getDataUser().confirmationToken}`
  );
};

export const confirmEmail = async (token: string): Promise<ApiResponse> => {
  return await api.patch<ApiResponse>(`/auth/${token}`);
};

export const authService = {
  login: (dataUser: any) => {
    localStorage.setItem('dataUser', JSON.stringify(dataUser));
    localStorage.setItem('token', dataUser.token);
  },
  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('dataUser');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};

export const getDataUser = (): User => {
  const dataUser = localStorage.getItem('dataUser') ?? '';
  return JSON.parse(dataUser);
};
