import React from 'react';
import { ChangeEvent } from 'react';
import { useState } from 'react';
import { WeatherAppContext } from './context';
import { Main } from './pages';

const App = () => {
  const [search, setSearch] = useState<string>('');

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  return (
    <WeatherAppContext.Provider value={{ search, handleSearchChange }}>
      <Main />
    </WeatherAppContext.Provider>
  );
};

export default App;
