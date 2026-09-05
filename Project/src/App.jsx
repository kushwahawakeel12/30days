import { useState } from "react";
import DigitalClock from "./Componenst/DigitalClock";

function App() {
  const [color, setColor] = useState("red");
  return (
    <>
      <h1>Gigital Clock in reack js</h1>
      <select
        onChange={(event) => setColor(event.target.value)}
        name=""
        id=""
        style={{ width: "120px", height: "40px" }}
      >
        <option value={"black"}> black</option>
        <option value={"red"}> red</option>
        <option value={"yellow"}> yellow</option>
        <option value={"green"}> green</option>
      </select>

      <DigitalClock color={color} />
    </>
  );
}

export default App;
