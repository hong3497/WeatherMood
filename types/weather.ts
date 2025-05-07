// types/weather.ts

export interface WeatherData {
  name: string;
  weather: {
    main: string;
    description: string;
  }[];
  main: {
    temp: number;
    humidity: number;
  };
}
