import { useEffect, useState } from 'react';
import * as WeatherApi from '../api/WeatherApi';
import { IWeatherForecastItem } from '../types';

const useWeatherData = (city: string) => {
  const [weatherData, setWeatherData] = useState<IWeatherForecastItem>();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getWeatherData = async (city: string) => {
    try {
      setIsLoading(true);
      const response = await WeatherApi.getWeatherData(city);
      setWeatherData(response.data.list[0]);
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (city) {
      getWeatherData(city);
    }
  }, [city]);

  return { weatherData, isLoading };
};

export { useWeatherData };
