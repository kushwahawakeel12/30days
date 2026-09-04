function Loopandmap() {
  const userdata = [
    {
      id: "1",
      name: "pappu",
      age: "89",
    },
    {
      id: "3",
      name: "raju",
      age: "50",
    },
    {
      id: "4",
      name: "rina",
      age: "40",
    },
  ];
  return (
    <>
      <h1>Loop with array and map</h1>
      <table border="1">
        <thead>
          <tr>
            <td>id</td>
            <td>name </td>
            <td>age</td>
          </tr>
        </thead>

        <tbody>
          {userdata.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name} </td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h1>dammy data</h1>
      <div>
        <table border="1">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>gmail</td>
              <td>age</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <tr>
                <td>1</td>
                <td>wakell</td>
                <td>gmail@3.com</td>
                <td>2</td>
              </tr>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Loopandmap;
