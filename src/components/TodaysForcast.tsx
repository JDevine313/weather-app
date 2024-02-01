import { useContext, useEffect, useState } from "react";
import { Forecastday } from "../models/WeatherApiResponse";
import "./TodaysForcast.css";
import WeatherContext from "../context/WeatherContext";

const TodaysForcast = () => {
  const [today, setToday] = useState<Forecastday | null>(null);
  const { forecast } = useContext(WeatherContext);
  useEffect(() => {
    if (forecast) {
      setToday(forecast?.forecast.forecastday[0]);
    }
  }, [forecast]);
  return (
    <div className="TodaysForcast">
      {today && (
        <div id="carouselExample" className="carousel slide">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="my-inner-card">
                <h3>Morning</h3>
                <p>Temp: {today.hour[6].temp_f}&deg; F</p>
                <p>Percipatation: {today.hour[6].precip_in} in</p>
                <img src={today.hour[6].condition.icon}></img>
              </div>
            </div>
            <div className="carousel-item">
              <div className="my-inner-card">
                <h3>Mid-Day</h3>
                <p>Temp: {today.hour[12].temp_f}&deg; F</p>
                <p>Percipatation: {today.hour[12].precip_in} in</p>
                <img src={today.hour[12].condition.icon}></img>
              </div>
            </div>
            <div className="carousel-item">
              <div className="my-inner-card">
                <h3>Evening</h3>
                <p>Temp: {today.hour[17].temp_f}&deg; F</p>
                <p>Percipatation: {today.hour[17].precip_in} in</p>
                <img src={today.hour[17].condition.icon}></img>
              </div>
            </div>
            <div className="carousel-item">
              <div className="my-inner-card">
                <h3>Night</h3>
                <p>Temp: {today.hour[23].temp_f}&deg; F</p>
                <p>Percipatation: {today.hour[23].precip_in} in</p>
                <img src={today.hour[23].condition.icon}></img>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExample"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default TodaysForcast;
