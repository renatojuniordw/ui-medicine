import api from './api';

import { ApiResponse } from '../models/api.model';

export const getMedicine = async (
  page: number,
  limit: number
): Promise<ApiResponse> => {
  return await api.get<ApiResponse>(`/medicine?page=${page}&limit=${limit}`);
};
