import { AxiosResponse } from 'axios';
import ServiceHook from '../models/service-hook.model';
import { useCallback, useState } from 'react';
import { getMedicine } from '../services/medicine.service';

// export function useGetAllMedicine(): ServiceHook<AxiosResponse> {
//   const [data, setData] = useState<any>();

//   const execute = async (): Promise<void> => {
//     await getMedicine(1, 10).then((response) => {
//       setData(response);
//     });

//     return [data, useCallback(execute, [])];
//   };
// }

export function useGetAllMedicine(): ServiceHook<AxiosResponse> {
  const [data, setData] = useState<any>();
  const execute = async (): Promise<void> => {
    await getMedicine(1, 10)
      .then((response) => {
        setData(response);
      })
      .catch((error) => console.error(error));
  };

  return [data, useCallback(execute, [])];
}
