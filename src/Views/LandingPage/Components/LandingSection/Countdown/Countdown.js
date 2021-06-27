import "./Countdown.scss";
import { useEffect, useState } from "react";
import Time from "./Time";

const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let difference = +new Date(`7/7/${year}`) - +new Date();
  let timeLeft = {};
  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }
  return timeLeft;
};

const Countdown = () => {
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
    <div className="Countdown">
      <Time value={timerComponents[0]} text="days" />
      <Time value={timerComponents[1]} text="hours" />
      <Time value={timerComponents[2]} text="minutes" />
      <Time value={timerComponents[3]} text="seconds" />
    </div>
  );
};
export default Countdown;
