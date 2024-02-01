import axios from "axios";
import { WeatherApiResponse } from "../models/WeatherApiResponse";

const key: string = import.meta.env.VITE_WEATHER_API_KEY || "";

export const getWeatherNow = async (
  zip: string
): Promise<WeatherApiResponse> => {
  return (
    await axios.get(`http://api.weatherapi.com/v1/current.json`, {
      params: { key: key, q: zip, days: 7 },
      headers: { accept: "application/json" },
    })
  ).data;
};

export const getCurrentForecast = async (
  zip: string
): Promise<WeatherApiResponse> => {
  return (
    await axios.get(`http://api.weatherapi.com/v1/forecast.json`, {
      params: { key: key, q: zip, days: 7 },
      headers: { accept: "application/json" },
    })
  ).data;
};
