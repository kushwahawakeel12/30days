import { useState } from "react";

function HooksJs(){

    const [count,setCount] =useState(0)
    return(
        <div>

        <h1>effecHook in react js </h1>

        <button onClick={()=>setCount(count+1)}>update <h3>{count}</h3></button>
        <h3>update {count}</h3>
        </div>

        
    )
}

export default HooksJs;