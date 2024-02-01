import { ReactNode, useEffect, useState } from "react";
import { Current, WeatherApiResponse } from "../models/WeatherApiResponse";
import {
  getCurrentForecast,
  getWeatherNow,
} from "../services/weatherAPIservice";
import WeatherContext from "./WeatherContext";
import { getZipCode } from "../services/geolocationAPIservice";

interface Props {
  children: ReactNode;
}

const WeatherContextProvider = ({ children }: Props) => {
  const [forecast, setForecast] = useState<WeatherApiResponse | null>(null);
  const [current, setCurrent] = useState<Current | null>(null);
  const [zipCode, setZipCode] = useState<string>("");

  useEffect(() => {
    getZipCode().then((res) => setZipCode(res.address.postalCode));
  }, []);

  useEffect(() => {
    if (zipCode !== "") {
      getWeatherNow(zipCode).then((res) => setCurrent(res.current));
      getCurrentForecast(zipCode).then((res) => setForecast(res));
    }
  }, [zipCode]);

  return (
    <WeatherContext.Provider value={{ forecast, current, zipCode, setZipCode }}>
      {children}
    </WeatherContext.Provider>
  );
};
export default WeatherContextProvider;
