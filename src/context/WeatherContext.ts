import { createContext } from "react";
import { Current, WeatherApiResponse } from "../models/WeatherApiResponse";

interface WeatherContextModel {
  forecast: WeatherApiResponse | null;
  current: Current | null;
  zipCode: string;
  setZipCode: (string: string) => void;
}

const defaultValues: WeatherContextModel = {
  forecast: null,
  current: null,
  zipCode: "",
  setZipCode() {},
};

const WeatherContext = createContext(defaultValues);

export default WeatherContext;
