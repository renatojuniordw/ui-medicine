import ServiceHook from '../models/service-hook.model';
import { useCallback, useState } from 'react';
import { getMedicine } from '../services/medicine.service';
import { Medicine } from '../models/medicine.model';

export function useGetAllMedicine(
  page: number,
  pageSize: number
): ServiceHook<Medicine[]> {
  const [data, setData] = useState<any>();
  const execute = async (): Promise<void> => {
    await getMedicine(page, pageSize)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return [data, useCallback(execute, [])];
}
