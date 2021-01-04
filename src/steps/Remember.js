import React from "react";

export default function RememberStage({ animalsList, next }) {
  const [time, setTime] = React.useState(8);
  React.useEffect(() => {
    let timer = null;
    if (time > 0) {
      timer = setTimeout(() => setTime((time) => time - 1), 1000);
    } else {
      next();
    }
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [time, next]);
  const getClass = (time) => {
    if (time < 3) return "text-danger";
    if (time < 6) return "text-warning";
    return "text-success";
  };

  return (
    <div className="container">
      <h1 className="my-3 text-center">Remember the following animals:</h1>
      <div className="row ml-0">
        <div className="col-md-6 text-center h-100 my-auto">
          <h4>
            Time left: <span className={`h2 ${getClass(time)}`}>{time}</span>s
          </h4>
        </div>
        <ul className="col-md-4 list-group">
          {animalsList.map((animal, idx) => (
            <li key={idx} className="list-group-item">
              {animal}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
