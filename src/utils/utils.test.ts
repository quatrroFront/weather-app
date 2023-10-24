import { ICity } from '../types';
import {
  getFormattedCities,
  getItemsFromStorage,
  setItemsToStorage,
} from './utils';

describe('getFormattedCities', () => {
  it('should return unique cities from an array of cities', () => {
    const cities: ICity[] = [
      { city: 'New York' },
      { city: 'Los Angeles' },
      { city: 'Chicago' },
      { city: 'New York' },
    ];

    const result = getFormattedCities(cities);

    expect(result).toEqual(['New York', 'Los Angeles', 'Chicago']);
  });

  it('should handle an empty array of cities', () => {
    const cities: ICity[] = [];

    const result = getFormattedCities(cities);

    expect(result).toEqual([]);
  });
});

describe('getItemsFromStorage', () => {
  it('should retrieve and parse items from storage correctly', () => {
    const mockStorage: Storage = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(['item1', 'item2'])),
      setItem: jest.fn(),
      length: 2, // Example values for the missing properties
      clear: jest.fn(),
      key: jest.fn(),
      removeItem: jest.fn(),
    };

    const key = 'testKey';

    const result = getItemsFromStorage(mockStorage, key);

    expect(result).toEqual(['item1', 'item2']);
    expect(mockStorage.getItem).toHaveBeenCalledWith(key);
  });
});

describe('setItemsToStorage', () => {
  it('should set items to storage correctly', () => {
    const mockStorage: Storage = {
      getItem: jest.fn().mockReturnValue(JSON.stringify(['item1', 'item2'])),
      setItem: jest.fn(),
      length: 2, // Example values for the missing properties
      clear: jest.fn(),
      key: jest.fn(),
      removeItem: jest.fn(),
    };

    const key = 'testKey';
    const items = ['item1', 'item2'];

    setItemsToStorage(mockStorage, key, items);

    expect(mockStorage.setItem).toHaveBeenCalledWith(
      key,
      JSON.stringify(items)
    );
  });
});
