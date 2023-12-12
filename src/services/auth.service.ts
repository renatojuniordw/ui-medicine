import api from './api';

import { Auth } from '../models/auth.model';
import { ApiResponse } from '../models/api.model';

export const login = async (auth: Auth): Promise<ApiResponse> => {
  return await api.post<ApiResponse>(`/auth/login`, auth);
};

export const AuthService = {
  login: (token: string) => {
    localStorage.setItem('token', token);
  },
  logout: () => {
    localStorage.removeItem('token');
  },
  isAuthenticated: () => {
    return !!localStorage.getItem('token');
  },
};
