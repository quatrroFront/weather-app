import { TextField, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useState, useRef } from 'react';
import { useWeatherAppContext } from '../../context';
import { useOutsideClick } from '../../effects';
import { SearchResults } from './SearchResults';

const useStyles = makeStyles({
  search: {
    borderRadius: 12,
    width: 600,
  },
});

const Search = () => {
  const [isSearchMode, setSearchMode] = useState<boolean>(false);
  const { search, handleSearchChange } = useWeatherAppContext();
  const containerRef = useRef<HTMLInputElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const styles = useStyles();

  const handleSearchModeActivate = () => {
    setSearchMode(true);
  };

  const handleSearchModeDeactivate = () => {
    setSearchMode(false);
  };

  useOutsideClick(containerRef.current, handleSearchModeDeactivate);

  return (
    <Box ref={containerRef}>
      <TextField
        inputProps={{ ref: searchInputRef }}
        className={styles.search}
        variant="standard"
        placeholder="Search City"
        value={search}
        onChange={handleSearchChange}
        onFocus={handleSearchModeActivate}
      />
      {isSearchMode && search && <SearchResults />}
    </Box>
  );
};

export { Search };
