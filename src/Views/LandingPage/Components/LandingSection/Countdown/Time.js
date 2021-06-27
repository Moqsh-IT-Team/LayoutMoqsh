const Time = (props) => {
  let cls = `Countdown__${props.text}`;
  return (
    <div className={cls}>
      <span>{props.value < 10 ? `0${props.value}` : props.value}</span>
      <p>{props.text}</p>
    </div>
  );
};

export default Time;
