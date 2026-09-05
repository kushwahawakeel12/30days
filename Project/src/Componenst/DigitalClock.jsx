import { useEffect, useState } from "react";

function DigitalClock({ color }) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);
  return (
    <div>
      <h1>Clock</h1>
      <h2
        style={{
          color: color,
          backgroundColor: "white",
          width: "140px",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        {time}
      </h2>
    </div>
  );
}

export default DigitalClock;
