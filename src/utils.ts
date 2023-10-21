import { ICity } from './types';

const getFormattedCities = (cities: ICity[]) => {
  return cities.reduce((acc: string[], { city }) => {
    if (acc.includes(city)) return acc;
    return [...acc, city];
  }, []);
};

export { getFormattedCities };
