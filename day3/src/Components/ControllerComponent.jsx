import { useState } from "react";

function ControllerComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <h1>Controller Components</h1>

      <form action="" method="get">
        <input
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter name"
        />
        <br /> <br />
        <input
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="Enter email"
        />
        <br /> <br />
        <input
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="Enter  passsword"
        />
        <br /> <br />
        <button>submit</button>


        <button onClick={()=>{setName(""),setEmail(""),setPassword("")}}>clean</button>
      </form>
      <div>
        <h2>{name}</h2>
        <h2>{email}</h2>
        <h2>{password}</h2>
      </div>
    </>
  );
}

export default ControllerComponent;
