import axios, { AxiosRequestConfig } from 'axios';

const BASE_URL: string = 'https://api.geoapify.com/v1/geocode';
const API_KEY: string = '9a7a1915925e41948e1a09dd3414439e';
const LIMIT: number = 5;

export const getCities = (search: string) => {
  return axios.get(`${BASE_URL}/search`, {
    params: {
      text: search,
      type: 'city',
      format: 'json',
      apiKey: API_KEY,
      limit: LIMIT,
    },
  });
};
