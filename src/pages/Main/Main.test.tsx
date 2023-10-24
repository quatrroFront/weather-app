import React from 'react';
import { render, screen } from '@testing-library/react';
import { useWeatherAppContext } from '../../context';
import { RecentSearches, Search, WeatherCard } from '../../components';
import { Main } from './Main';

jest.mock('../../components', () => ({
  RecentSearches: () => null,
  Search: () => null,
  WeatherCard: () => null,
}));

jest.mock('../../context', () => ({
  useWeatherAppContext: () => ({
    city: null,
  }),
}));

describe('Main Component', () => {
  it('renders correctly without a city', () => {
    render(<Main />);

    const subTitle = screen.queryByText(/Current Forecast for/);
    expect(subTitle).toBeNull();
  });
});
