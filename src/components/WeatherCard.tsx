import { Card, Typography } from '@mui/material';
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
    paddingTop: 16,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    width: 300,
    minHeight: 200,
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

          <Typography className={styles.title}>City: {city}</Typography>
          <Typography>
            {weatherData?.weather[0].description}
            <br />
            {`Temperature: ${weatherData?.main.temp}°C`}
            <br />
            {`Humidity: ${weatherData?.main.humidity}%`}
            <br />
            {`Wind: ${weatherData?.wind.speed}m/s`}
            <br />
          </Typography>
        </>
      )}
    </Card>
  );
};

export { WeatherCard };
