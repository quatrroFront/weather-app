import { isEmpty } from 'lodash';
import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useWeatherAppContext } from '../../context';
import { useFetchCities } from '../../effects';
import { LoadingIndicator } from '../LoadingIndicator';

const useStyles = makeStyles({
  root: {
    position: 'absolute !important' as any,
    width: '100%',
    left: 0,
    top: 40,
    zIndex: 11,
  },
  list: {
    borderRadius: 8,
    backgroundColor: '#e7e7e7',
  },
  listItem: {
    cursor: 'pointer',
    padding: '12px 16px !important',
    '&:hover': {
      backgroundColor: '#c8d9f7',
    },
  },
  emptyState: {
    padding: '12px 16px',
  },
});

interface IProps {
  onSearchModeDeactivate: () => void;
}

const SearchResults = ({ onSearchModeDeactivate }: IProps) => {
  const { search, handleCityChange } = useWeatherAppContext();
  const { cities, isLoading } = useFetchCities(search);
  const styles = useStyles();

  const isEmptyState = !isLoading && search && isEmpty(cities);

  const handleListItemClick = (city: string) => {
    handleCityChange(city);
    onSearchModeDeactivate();
  };

  return (
    <List classes={{ root: styles.root }} className={styles.list}>
      {isLoading && <LoadingIndicator />}
      {isEmptyState && <Box className={styles.emptyState}>No Results</Box>}
      {!isLoading &&
        cities.map((city: string) => (
          <ListItem
            key={city}
            className={styles.listItem}
            onClick={() => handleListItemClick(city)}
          >
            {city}
          </ListItem>
        ))}
    </List>
  );
};

export { SearchResults };
