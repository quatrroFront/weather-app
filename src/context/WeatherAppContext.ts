import { createContext } from 'react';
import { IWeatherAppContext } from '../types';

const WeatherAppContext = createContext<IWeatherAppContext>({
  search: '',
  city: '',
  handleSearchChange: () => {},
  handleCityChange: () => {},
  weatherData: undefined,
  isLoadingWeatherData: false,
});

export { WeatherAppContext };
