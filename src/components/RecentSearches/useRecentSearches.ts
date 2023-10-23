import { useState, useEffect, MouseEvent } from 'react';
import { isEmpty } from 'lodash';
import { RECENT_SEARCHES_KEY } from '../../constants';
import { useWeatherAppContext } from '../../context';
import { getItemsFromStorage, setItemsToStorage } from '../../utils';

const DEFAULT_RECENT_SEARCHES = ['Kyiv', 'Paris'];

const useRecentSearches = () => {
  const { city, handleCityChange } = useWeatherAppContext();

  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  const handleRecentSearchesChange = (city: string) => {
    if (recentSearches.includes(city)) return;

    const newItems = [...recentSearches, city];
    setItemsToStorage(localStorage, RECENT_SEARCHES_KEY, newItems);
    setRecentSearches(newItems);
  };

  const handleItemRemove = (e: MouseEvent, item: string) => {
    e.stopPropagation();
    const filteredItems = recentSearches.filter((city) => city !== item);
    setItemsToStorage(localStorage, RECENT_SEARCHES_KEY, filteredItems);
    setRecentSearches(filteredItems);
  };

  useEffect(() => {
    if (city) {
      handleRecentSearchesChange(city);
    }
  }, [city]);

  useEffect(() => {
    const initialRecentSearches = getItemsFromStorage(
      localStorage,
      RECENT_SEARCHES_KEY
    );

    setRecentSearches(
      isEmpty(initialRecentSearches)
        ? DEFAULT_RECENT_SEARCHES
        : initialRecentSearches
    );
  }, []);

  return { recentSearches, handleCityChange, handleItemRemove };
};

export { useRecentSearches };
