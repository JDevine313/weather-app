import { FormEvent, useContext, useState } from "react";
import "./Header.css";
import WeatherContext from "../context/WeatherContext";

const Header = () => {
  const { setZipCode } = useContext(WeatherContext);
  const [zipInput, setZipInput] = useState<string>("");
  const [showLocation, setShowLocation] = useState<boolean>(false);
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setZipCode(zipInput);
    setZipInput("");
    setShowLocation(false);
  };
  return (
    <div className="Header">
      <h1>Week Checker</h1>
      <button onClick={() => setShowLocation(true)}>
        <i className="fa-solid fa-globe"></i>
      </button>
      {showLocation && (
        <div id="location-form-container">
          <form onSubmit={handleSubmit}>
            <label htmlFor="zip">Please enter your zip code.</label>
            <input
              type="text"
              name="zip"
              id="zip"
              value={zipInput}
              onChange={(e) => setZipInput(e.target.value)}
            />
            <button>Submit</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Header;
