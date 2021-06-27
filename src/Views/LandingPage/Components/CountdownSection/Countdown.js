import "./Countdown.scss";
import Time from "./Time";
import { useEffect, useState } from "react";
import calculateTimeLeft from "../../../../Util/CalculateTimeLeft";

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });
  const timerComponents = [];
  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      timerComponents.push(0);
    }
    timerComponents.push(timeLeft[interval]);
  });

  return (
    <section id="CountdownSection" className="CountdownSection">
      <h1>
        Exciting events and contests with prize pool worth $2000 Coming Soon
      </h1>
      <div className="CountdownSection__Countdown">
        <Time className="days" value={timerComponents[0]} text="days" />
        <Time className="hours" value={timerComponents[1]} text="hours" />
        <Time className="minutes" value={timerComponents[2]} text="minutes" />
        <Time className="seconds" value={timerComponents[3]} text="seconds" />
      </div>
    </section>
  );
}
export default CountdownSection;
