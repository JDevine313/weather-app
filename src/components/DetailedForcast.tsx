import { useNavigate, useParams } from "react-router-dom";
import "./DetailedForcast.css";
import { useContext } from "react";
import WeatherContext from "../context/WeatherContext";

const DetailedForcast = () => {
  const index = parseInt(useParams().index as string);
  const { forecast } = useContext(WeatherContext);
  const navigate = useNavigate();
  const convertTime = (hour: number) => {
    return hour === 12
      ? "12:00 PM"
      : hour === 0
      ? "12:00 AM"
      : hour < 12
      ? `${hour}:00 AM`
      : `${hour - 12}:00 PM`;
  };
  return (
    <div className="DetailedForcast">
      <button onClick={() => navigate("/")}>Back</button>
      {forecast && (
        <ul className="quick-look">
          {forecast?.forecast.forecastday[index].hour.map((hour) => (
            <li key={hour.time}>
              <span>
                {convertTime(parseInt(hour.time.slice(11)))}{" "}
                <img src={hour.condition.icon} /> {hour.temp_f}&deg; F
              </span>
            </li>
          ))}
        </ul>
      )}
      {forecast && (
        <ul>
          {forecast?.forecast.forecastday[index].hour.map((hour) => (
            <li key={hour.time}>
              <div className="hour">
                <span className="time">
                  {convertTime(parseInt(hour.time.slice(11)))}
                </span>
                <span>Tempature: {hour.temp_f}&deg; F</span>
                <span>Feels like: {hour.feelslike_f}&deg; F</span>
                <span>Chance of Rain: {hour.chance_of_rain}%</span>
                <span>Chance of Show: {hour.chance_of_snow}%</span>
                <span>
                  {hour.condition.text} <img src={hour.condition.icon} alt="" />
                </span>
                <span>
                  Wind: {hour.wind_mph}mph {hour.wind_dir}
                </span>
                <span>Gusts up to: {hour.gust_mph}mph</span>
                <span>Heat Index: {hour.heatindex_f}&deg; F</span>
                <span>Wind Chill: {hour.windchill_f}&deg; F</span>
                <span>Humidity: {hour.humidity}</span>
                <span>UV: {hour.uv}</span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DetailedForcast;
