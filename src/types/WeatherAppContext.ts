import { ChangeEvent } from 'react';

export interface IWeatherAppContext {
  search: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
