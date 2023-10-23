import { ChangeEvent } from 'react';
import { IWeatherForecastItem } from './Weather';

export interface IWeatherAppContext {
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  city: string;
  handleCityChange: (city: string) => void;
  weatherData: IWeatherForecastItem | undefined;
  isLoadingWeatherData: boolean;
}
