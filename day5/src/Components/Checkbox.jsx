import { useState } from "react";

function Checkbox(){

    const [gender,setGender] = useState("female")

    const [sele,setSele] = useState('select city')
    return(
        <div>
            <h1>checkbox handler</h1>

            <h4> Select gender</h4>
            <input onChange={(event)=>setGender(event.target.value)} type="radio" value={"male"} checked={gender=="male"} name="gender" id="male" />
            <label htmlFor="male">male</label>

            <input onChange={(event)=>setGender(event.target.value)} type="radio" value={"female"} checked={gender=="female"} name="gender"  id= "female"/>
            <label htmlFor="female">female</label>

            <h3>{gender}</h3>

            <br />
            <br />
            <h1> Select </h1>
            <select onChange={(event)=>setSele(event.target.value)} defaultValue={"ktm"} >
                <option value="janpur">janpur</option>
                   <option value="ktm">ktm</option>
                      <option value="biratnager">biratnager</option>

            </select>

            <h3>{sele}</h3>
        </div>
    )
}

export default Checkbox;