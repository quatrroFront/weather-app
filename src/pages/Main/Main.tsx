import { Container, Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { RecentSearches, Search, WeatherCard } from '../../components';
import { useWeatherAppContext } from '../../context';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    height: '100vh',
  },
  topBar: {
    position: 'relative',
  },
  subTitle: {
    padding: '48px 0 16px',
  },
});

const Main = () => {
  const { city } = useWeatherAppContext();
  const styles = useStyles();

  return (
    <Container className={styles.container}>
      <Box className={styles.topBar}>
        <Search />
      </Box>
      <RecentSearches />
      {city && (
        <>
          <Typography className={styles.subTitle}>
            Current Forecast for {city}
          </Typography>
          <WeatherCard />
        </>
      )}
    </Container>
  );
};

export { Main };
