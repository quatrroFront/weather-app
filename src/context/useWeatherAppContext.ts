import { useContext } from 'react';
import { WeatherAppContext } from './WeatherAppContext';

const useWeatherAppContext = () => useContext(WeatherAppContext);

export { useWeatherAppContext };
