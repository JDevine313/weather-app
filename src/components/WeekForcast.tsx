import { useContext } from "react";
import { calcDay } from "../spec/dayCalculator";
import "./WeekForcast.css";
import WeatherContext from "../context/WeatherContext";
import { useNavigate } from "react-router-dom";

const WeekForcast = () => {
  const { forecast } = useContext(WeatherContext);
  const navigate = useNavigate();
  return (
    <div className="WeekForcast">
      {forecast && (
        <ul id="week-forcast">
          {forecast.forecast.forecastday.map((day, i) => (
            <li key={day.date} onClick={() => navigate(`/detailed/${i}`)}>
              <h3 className="col-5">{calcDay(day)}</h3>
              <div className="col-5">
                <p>High: {day.day.maxtemp_f}&deg; F </p>
                <p>Low: {day.day.mintemp_f}&deg; F</p>
              </div>
              <img src={day.day.condition.icon} className="col-2"></img>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WeekForcast;
