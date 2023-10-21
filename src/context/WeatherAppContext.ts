import { createContext } from 'react';
import { IWeatherAppContext } from '../types';

const WeatherAppContext = createContext<IWeatherAppContext>({
  search: '',
  handleSearchChange: () => {},
});

export { WeatherAppContext };
