import { useState, useEffect } from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { Clear as ClearIcon } from '@mui/icons-material';
import { useRecentSearches } from './useRecentSearches';
import { useStyles } from './styles';

const RecentSearches = () => {
  const { handleCityChange, handleItemRemove, recentSearches } =
    useRecentSearches();
  const styles = useStyles();

  return (
    <Box className={styles.recentSearches}>
      <Typography className={styles.header}>Recent Searches</Typography>
      <Box className={styles.itemsContainer}>
        {recentSearches.map((city: string) => (
          <Box
            key={city}
            className={styles.item}
            onClick={() => handleCityChange(city)}
          >
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
