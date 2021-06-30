function Time({ className, value, text }) {
  return (
    <div className={`Countdown__${className}`}>
      <span>{value < 10 ? `0${value}` : value}</span>
      <p>{text}</p>
    </div>
  );
}

export default Time;
