import { useState } from "react";

function MultippleState() {

    const [count,setCount] = useState(0)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(count+1)}>click me </button>

      {
        count==0?<h1>condion 0</h1>
        :count==1?<h1>condion 1</h1>
        :count==2?<h1>condion 2</h1>
        :count==3?<h1>condion 3 </h1>
        :null

      }
    </div>
  );
}

export default MultippleState;
