import { useCallback, useState } from 'react';

import ServiceHook from '../models/service-hook.model';

import {
  getActiveIngredient,
  getReference,
  getTradeName,
} from '../services/medicine.service';

export function useGetActiveIngredient(): ServiceHook<
  { activeIngredient: string }[]
> {
  const [data, setData] = useState<any>([]);
  const execute = async (): Promise<void> => {
    await getActiveIngredient()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return [data, useCallback(execute, [])];
}

export function useGetReference(): ServiceHook<{ reference: string }[]> {
  const [data, setData] = useState<any>([]);
  const execute = async (): Promise<void> => {
    await getReference()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return [data, useCallback(execute, [])];
}

export function useGetTradeName(): ServiceHook<{ tradeName: string }[]> {
  const [data, setData] = useState<any>([]);
  const execute = async (): Promise<void> => {
    await getTradeName()
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return [data, useCallback(execute, [])];
}
