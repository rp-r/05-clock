
import { useState,useEffect } from "react";

const Clock=()=>
{

      const [time,setTime]=useState(()=>
  {
    console.log(" 🚚 intializing flux capacitors...");
    return new Date().toLocaleTimeString();
  });
;

 useEffect(()=>{
  console.log('🎍 Starting Clock...')
//   const tick=()=>{
  //  setTime(new Date().toLocaleTimeString());
   // console.log('🧭 Tick ....');
   
 // }
setInterval(()=>
  {
    setTime( new Date().toLocaleTimeString());
  },1000);



 },[])
    return ( <>   
    
       <p>In the name of Allah</p>
     <div className="display-1 font monospace text-center">
     {time}
     </div></>
  
    )
}

export default Clock;