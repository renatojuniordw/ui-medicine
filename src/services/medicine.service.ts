import api from './api';

import { ApiResponse } from '../models/api.model';

export const getMedicine = async (
  page: number,
  pageSize: number
): Promise<ApiResponse> => {
  return await api.get<ApiResponse>(
    `/medicine?page=${page}&pageSize=${pageSize}`
  );
};
