import React from 'react';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { WeatherAppContext } from './context';
import { useWeatherData } from './effects';
import { Main } from './pages';

const App = () => {
  const [search, setSearch] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const { isLoading: isLoadingWeatherData, weatherData } = useWeatherData(city);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  return (
    <WeatherAppContext.Provider
      value={{
        city,
        search,
        handleCityChange,
        handleSearchChange,
        isLoadingWeatherData,
        weatherData,
      }}
    >
      <Main />
    </WeatherAppContext.Provider>
  );
};

export default App;
