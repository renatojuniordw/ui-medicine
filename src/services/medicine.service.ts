import api from './api';

import { ApiResponse } from '../models/api.model';
import { FilterMedicine } from '../models/medicine.model';

export const getMedicine = async (
  page: number,
  pageSize: number,
  filter?: FilterMedicine
): Promise<ApiResponse> => {
  return await api.post<ApiResponse>(
    `/medicine?page=${page}&pageSize=${pageSize}`,
    filter
  );
};

export const getActiveIngredient = async () => {
  return await api.get<ApiResponse>(`/medicine/active-ingredient`);
};

export const getReference = async () => {
  return await api.get<ApiResponse>(`/medicine/reference`);
};

export const getTradeName = async () => {
  return await api.get<ApiResponse>(`/medicine/trade-name`);
};
