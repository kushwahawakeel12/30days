import { useState } from "react";

function Profile(){

    const [cardstyle,setCardstyle]=useState({ margin:"7px", width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"})

    const updatethem =(bgColor,textColor)=>{
       setCardstyle({...cardstyle})
    }
    return(
        <div>
            <h1>this is the inline component</h1>
            <h1>inlin css </h1>
            <button onChange={()=>updatethem("gray","green")}>gray them</button>
             <button onChange={()=>updatethem("white","black")}>default them</button>
 <div style={{display:"flex",flexWrap:"wrap"}}>
     <div style={{width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc",margin:"7px"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{margin:"7px",  width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{ margin:"7px",width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{margin:"7px",  width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{ margin:"7px",width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{margin:"7px",  width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={{ margin:"7px",width:"200px",height:"290px",border:"2px solid #e2d5d5",boxShadow:"1px 2px 3px 1px #ccc"}}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
             <div style={cardstyle}>
                <img style={{backgroundColor:"#ccc",width:"200px",border:"2px solide #ccccc3c"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_sH47dHBeNkmS6X97RaxgKrE_NzX4RHAZRkwvYggbcqyIi6WAqnLWngqK&s=10" alt="" />
                <h3 style={{font:"3px"}}>petter</h3>
                <h3>software development</h3>
            </div>
 </div>
           
        </div>
    )
}


export default Profile;