export interface WeatherApiResponse {
  location: Location;
  current: Current;
  forecast: Forecast;
}

interface Location {
  name: string;
  region: string;
  country: string;
  localtime: string;
}

export interface Current {
  temp_f: number;
  condition: Condition;
  wind_mph: number;
  wind_dir: string;
  humidity: number;
  feelslike_f: number;
  uv: number;
  gust_mph: number;
  is_day: number;
}

interface Condition {
  text: string;
  icon: string;
}

interface Forecast {
  forecastday: Forecastday[];
}

export interface Forecastday {
  date: string;
  day: Day;
  astro: Astro;
  hour: Hour[];
}

interface Day {
  maxtemp_f: number;
  mintemp_f: number;
  avgtemp_f: number;
  maxwind_mph: number;
  totalprecip_in: number;
  daily_will_it_rain: number;
  daily_chance_of_rain: number;
  condition: Condition;
  feelslike_f: number;
}

interface Astro {
  sunrise: string;
  sunset: string;
  moonrise: string;
  moonset: string;
  moon_phase: string;
}

interface Hour {
  time: string;
  temp_f: number;
  condition: Condition;
  wind_mph: number;
  wind_dir: string;
  precip_in: number;
  feelslike_f: number;
  chance_of_rain: number;
  chance_of_snow: number;
  gust_mph: number;
  heatindex_f: number;
  humidity: number;
  uv: number;
  windchill_f: number;
}
