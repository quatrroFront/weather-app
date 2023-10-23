import axios from 'axios';

const BASE_URL: string = 'http://api.openweathermap.org/data/2.5';
const APP_ID: string = '32cd61f69412506dd7843edd5af2836d';

const getWeatherData = (cityName: string) => {
  return axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: cityName,
      appId: APP_ID,
      units: 'metric',
    },
  });
};

export { getWeatherData };
