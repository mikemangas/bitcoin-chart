import "./App.css";
import LineChart from "./components/LineChart";
import SelectDate from "./components/SelectDate";
import { useState } from "react";

function App() {
  const [todayState, setTodayState] = useState();
  const [tenDaysAgoState, setTenDaysAgoState] = useState();
  return (
    <div className="App">
      <SelectDate toDay={setTodayState} todayMinusTen={setTenDaysAgoState} />
      <LineChart toDay={todayState} todayMinusTen={tenDaysAgoState} />
    </div>
  );
}

export default App;
