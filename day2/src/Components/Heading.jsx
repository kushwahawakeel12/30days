function Heading(){
  function fruit(){
    alert('apple')
  }
 const fun =()=>{
    alert("banana")
 }

    return(
        <div>
     <button onClick={fruit}>apple</button>
     <button onClick={fun}>banana</button>
 
        </div>
    )
}

export default Heading;