import { useState } from "react";

function HandleCheckbox() {

  const [skill,setSkill] = useState([])

  const handleSkill=(event)=>{

    console.log( event.target.value, event.target.checked)

    if(event.target.checked){
      setSkill([...skill,event.target.value])
    }
    else{
      setSkill([...skill.filter((item)=>item!=event.target.value)])
    }
  }

  return (
    <>
      <h1>Check box handler in reack js </h1>

      <h3>select your skill</h3>

      <input onChange={handleSkill} type="checkbox" id="php" value="php" />
      <label htmlFor="php">PHP</label>

      <br />
      <br />
      <input onChange={handleSkill} type="checkbox" id="java" value="java" />
      <label htmlFor="java">java</label>

      <br />
      <br />
      <input onChange={handleSkill} type="checkbox" id="js" value="js" />
      <label htmlFor="js">js</label>

      <br />
      <br />
      <input onChange={handleSkill} type="checkbox" id="python" value="python" />
      <label htmlFor="python">python</label>

      <br /> 
      <br />
      <input type="checkbox" placeholder="Enter your phone" onChange={handleSkill} />

<h1>{skill.toString()}</h1>
  
    </>
  );
}

export default HandleCheckbox;
