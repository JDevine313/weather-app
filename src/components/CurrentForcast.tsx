import "./CurrentForcast.css";
import WeatherContext from "../context/WeatherContext";
import { useContext } from "react";

const CurrentForcast = () => {
  const { current } = useContext(WeatherContext);
  return (
    <div className="CurrentForcast">
      {current && (
        <>
          <p>Temp: {current.temp_f}&deg;F</p>
          <p>{current.condition.text}</p>
          <p>Feels Like: {current.feelslike_f}&deg;F</p>
          <p>
            Wind: {current.wind_mph}mph {current.wind_dir}
          </p>
        </>
      )}
    </div>
  );
};

export default CurrentForcast;
