export interface IWeatherType {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface IWeatherForecastItem {
  dt: string;
  dt_txt: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    sea_level: number;
    grnd_level: number;
    humidity: number;
    temp_kf: number;
  };
  weather: IWeatherType[];
  clouds: { all: number };
  wind: { speed: number; deg: number };
  rain: { '3h': number };
}
