import { Box, Card, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { isEmpty } from 'lodash';

//Note: react-animated-weather doesn't have typings
//@ts-ignore
import ReactAnimatedWeather from 'react-animated-weather';
import { useWeatherAppContext } from '../context';
import { getWeatherIcon } from '../utils';
import { LoadingIndicator } from './LoadingIndicator';

const useStyles = makeStyles({
  weatherCard: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    minHeight: 200,
    padding: 16,
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    padding: '0 16px',
  },
  value: {
    minWidth: 100,
  },
  title: {
    padding: '16px 0px',
  },
});

const WeatherCard = () => {
  const { city, weatherData, isLoadingWeatherData } = useWeatherAppContext();
  const styles = useStyles();

  const reactAnimatedWeatherProps = {
    icon: getWeatherIcon(weatherData?.weather[0].main || ''),
    color: '#c6e2f4',
    size: 120,
    animate: true,
  };

  if (isEmpty(weatherData) && !isLoadingWeatherData) {
    return null;
  }

  return (
    <Card className={styles.weatherCard}>
      {isLoadingWeatherData ? (
        <LoadingIndicator />
      ) : (
        <>
          <ReactAnimatedWeather
            icon={reactAnimatedWeatherProps.icon}
            color={reactAnimatedWeatherProps.color}
            size={reactAnimatedWeatherProps.size}
            animate={reactAnimatedWeatherProps.animate}
          />
          <Typography className={styles.title}>{city}</Typography>
          <Box className={styles.row}>
            <Box>Summary:</Box>
            <Typography className={styles.value}>
              {weatherData?.weather[0].description}
            </Typography>
          </Box>
          <Box className={styles.row}>
            <Box>Temperature:</Box>
            <Typography className={styles.value}>
              {weatherData?.main.temp}°C`
            </Typography>
          </Box>
          <Box className={styles.row}>
            <Box>Humidity:</Box>
            <Typography className={styles.value}>
              {weatherData?.main.humidity}%
            </Typography>
          </Box>
          <Box className={styles.row}>
            <Box>Wind:</Box>
            <Typography className={styles.value}>
              {weatherData?.wind.speed}m/s
            </Typography>
          </Box>
        </>
      )}
    </Card>
  );
};

export { WeatherCard };
