import { isEmpty } from 'lodash';
import { Box, List, ListItem } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useWeatherAppContext } from '../../context';
import { useFetchCities } from '../../effects';
import { LoadingIndicator } from '../LoadingIndicator';

const useStyles = makeStyles({
  list: {
    borderRadius: 8,
    top: 8,
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

const SearchResults = () => {
  const { search } = useWeatherAppContext();
  const styles = useStyles();
  const { cities, isLoading } = useFetchCities(search);

  const isEmptyState = !isLoading && search && isEmpty(cities);

  return (
    <List className={styles.list}>
      {isLoading && <LoadingIndicator />}
      {isEmptyState && <Box className={styles.emptyState}>No Results</Box>}
      {!isLoading &&
        cities.map((city: string) => (
          <ListItem className={styles.listItem}>{city}</ListItem>
        ))}
    </List>
  );
};

export { SearchResults };
