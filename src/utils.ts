import moment from 'moment';
import { WEATHER_ICON, WEATHER_TYPE } from './constants';
import { ICity } from './types';

const getFormattedCities = (cities: ICity[]) => {
  return cities.reduce((acc: string[], { city }) => {
    if (acc.includes(city)) return acc;
    return [...acc, city];
  }, []);
};

const getItemsFromStorage = (dataStorage: Storage, key: string) => {
  return JSON.parse(dataStorage.getItem(key) as string) || [];
};

const setItemsToStorage = (
  dataStorage: Storage,
  key: string,
  recentSearches: string[]
) => {
  dataStorage.setItem(key, JSON.stringify(recentSearches));
};

export const getWeatherIcon = (weatherType: string) => {
  switch (weatherType) {
    case WEATHER_TYPE.CLOUDS:
      return WEATHER_ICON.CLOUDY;
    case WEATHER_TYPE.RAIN:
      return WEATHER_ICON.RAIN;
    case WEATHER_TYPE.MIST:
    case WEATHER_TYPE.SMOKE:
    case WEATHER_TYPE.HAZE:
    case WEATHER_TYPE.DUST:
    case WEATHER_TYPE.FOG:
    case WEATHER_TYPE.SAND:
    case WEATHER_TYPE.ASH:
      return WEATHER_ICON.FOG;
    case WEATHER_TYPE.SQUALL:
      return WEATHER_ICON.WIND;
    case WEATHER_TYPE.SNOW:
      return WEATHER_ICON.SNOW;
    case WEATHER_TYPE.DRIZZLE:
      return WEATHER_ICON.SLEET;
    case WEATHER_TYPE.CLEAR:
      return WEATHER_ICON.CLEARDAY;
    default:
      return '';
  }
};

export { getFormattedCities, getItemsFromStorage, setItemsToStorage };
