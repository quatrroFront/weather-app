import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { getCities } from '../api';
import { getFormattedCities } from '../utils';
import { ICity } from '../types';

const debouncedFunc = debounce((callback) => {
  callback();
}, 500);

const useFetchCities = (search: string) => {
  const [cities, setCities] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getCitiesData = async (search: string) => {
    try {
      const response = await getCities(search);
      setCities(getFormattedCities(response.data.results));
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (search) {
      setIsLoading(true);
      debouncedFunc(() => getCitiesData(search));
    } else {
      setCities([]);
    }
  }, [search]);

  return {
    isLoading,
    cities,
  };
};

export { useFetchCities };
