import { useState } from "react"

function InputField(){
    const [val,setVal] = useState('wakeel')
    const [e,setE] = useState("")
    const [phone,setPhone] = useState("0000000")
    return(
        <div>

        <h1>Hello</h1>

        <input type="text" value={val} onChange={(event)=>setVal(event.target.value)} placeholder="enter user name " />


        <input type="text" placeholder="Enter your gmail" onChange={(events)=>setE(events.target.value)} />
        <h1>{e}</h1>

        <input type="phone" placeholder="enter your phone" onChange={(p)=>setPhone(p.target.value)} />
        <h1>{phone}</h1>




        <br />
        <br />
        <h1>{val}</h1>
        <button onClick={()=>setVal("")}>clean</button>
        
        </div>
    )
}

export default InputField