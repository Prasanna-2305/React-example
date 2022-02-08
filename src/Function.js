import React from 'react';
function Function(prop) { 
    const red=()=>{
        alert("hiii!!")
    }
   return (
    <div>  
   <h1 onClick={red} >{prop.text}</h1> 
   </div>
   )
   
} ;
export default Function;