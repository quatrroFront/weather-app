export interface ICity {
  id?: number;
  city: string;
  name?: string;
  coord?: {
    lat: any;
    lon: any;
  };
  country?: string;
  population?: number;
  timezone?: number;
  sunrise?: number;
  sunset?: number;
}
