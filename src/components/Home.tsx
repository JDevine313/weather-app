import "./Home.css";
import TodaysForcast from "./TodaysForcast";
import WeekForcast from "./WeekForcast";

import CurrentForcast from "./CurrentForcast";

const Home = () => {
  return (
    <div className="Home">
      <CurrentForcast />
      <div id="flex-container">
        <TodaysForcast />
        <WeekForcast />
      </div>
    </div>
  );
};

export default Home;
