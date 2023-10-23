import { useState, useEffect, MouseEvent } from 'react';
import { isEmpty } from 'lodash';
import { Box, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Clear as ClearIcon } from '@mui/icons-material';
import { RECENT_SEARCHES_KEY } from '../constants';
import { useWeatherAppContext } from '../context';
import { getItemsFromStorage, setItemsToStorage } from '../utils';

const useStyles = makeStyles({
  recentSearches: {
    margin: '60px 0px 0px',
    padding: '16px 0',
  },
  header: {
    paddingBottom: 8,
  },
  item: {
    position: 'relative',
    cursor: 'pointer',
    minWidth: 100,
    height: 40,
    backgroundColor: '#c6e2f4',
    borderRadius: 6,
    lineHeight: '40px',
    textAlign: 'center',
    padding: '0 16px',
    margin: '0px 16px 8px 0px',
    '&:hover': {
      backgroundColor: '#79c8fa',
    },
  },
  itemsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  clearIcon: {
    width: '18px !important',
    height: '18px !important',
    color: '#ffffff',
    position: 'absolute',
    right: 4,
    top: 4,
    '&:hover': {
      color: '#009bff',
    },
  },
});

const DEFAULT_RECENT_SEARCHES = ['Kyiv', 'Paris'];

const RecentSearches = () => {
  const { city, handleCityChange } = useWeatherAppContext();

  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const styles = useStyles();

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

  return (
    <Box className={styles.recentSearches}>
      <Typography className={styles.header}>Recent Searches</Typography>
      <Box className={styles.itemsContainer}>
        {recentSearches.map((city: string) => (
          <Box className={styles.item} onClick={() => handleCityChange(city)}>
            {city}
            <Tooltip title="Remove">
              <ClearIcon
                className={styles.clearIcon}
                onClick={(e) => handleItemRemove(e, city)}
              />
            </Tooltip>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export { RecentSearches };
