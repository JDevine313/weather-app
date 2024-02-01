import axios from "axios";
import { GeolocationResponse } from "../models/GeolocationApiResponse";

const key: string = import.meta.env.VITE_GEOLOCATION_API_KEY || "";

export const getZipCode = async (): Promise<GeolocationResponse> => {
  return (
    await axios.get(`https://api.radar.io/v1/geocode/ip`, {
      headers: { Authorization: key },
    })
  ).data;
};
