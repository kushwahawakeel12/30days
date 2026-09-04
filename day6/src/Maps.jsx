import Lops from "./Components/Lops"


function Maps(){

    const users =([
        {
          id:"1",
          name:"wakeel",
          age:"22"
        },
                {
          id:"2",
          name:"wakeel",
          age:"22"
        },
                {
          id:"3",
          name:"wakeel",
          age:"22"
        },
    ])
    return(
      <>
      
      {
        users.map((user)=>
            <div>

             <Lops  data = {user}/>
            </div>
        )
      }
 
      </>
    )
}

export default Maps