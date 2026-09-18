import { useRef, useState } from "react";

function User() {
  const userRef = useRef();
  const passwordRef = useRef();
  const [users, setUser] = useState("wakeel");

  const handleForm = (event) => {
    event.preventDefault();
    const user = document.querySelector("#user").value;
    const password = document.querySelector("#password").value;
    console.log(user);
    console.log(password);
  };

  const handleFormRef = (event) => {
    event.preventDefault();
    userRef.current.value();
    passwordRef.current.value();
    console.log(userRef);
  };
  return (
    <div>
      <h1>Uncontrolled components in react js </h1>
      <div>
        <form action="" method="post" onSubmit={handleForm}>
          <input
            onChange={(data) => setUser(data.target.value)}
            type="text"
            placeholder="Enter user name"
            id="user"
          />
          <br /> <br />
          <input
            onChange={(data) => setUser(data.target.value)}
            type="password"
            placeholder="Enter user password"
            id="password"
          />
          <br /> <br />
          <button>submit</button>
        </form>
      </div>

      <h1>Uncontrolled components in react js with useRef</h1>

      <div>
        <form action="" method="post" onSubmit={handleFormRef}>
          <input useRef={useRef} type="text" placeholder="Enter user name" />
          <br /> <br />
          <input
            passwordRef={passwordRef}
            type="password"
            placeholder="Enter user password"
          />
          <br /> <br />
          <button>submit</button>
        </form>
      </div>
      <h1>{users}</h1>
    </div>
  );
}

export default User;
