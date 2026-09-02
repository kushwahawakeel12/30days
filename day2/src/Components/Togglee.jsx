import { useState } from "react";
import Effectt from "./Effectt";

function Togglee(){
    const [count,setCount] = useState(true)

    return(
        <div>
            <h1>This is Toggle and hide</h1>

            <button onClick={()=>setCount(!count)}>click</button>
            {
                count?<h1><Effectt/></h1>:null
            }
        </div>
    )
}

export default Togglee;