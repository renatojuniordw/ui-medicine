import api from './api';

import { Auth } from '../models/auth.model';
import { ApiResponse } from '../models/api.model';

export const login = async (auth: Auth): Promise<ApiResponse> => {
  return await api.post<ApiResponse>(`/auth/login`, auth);
};
