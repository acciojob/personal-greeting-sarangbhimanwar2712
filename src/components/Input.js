import React, { useState } from "react";

const Input = ()=>{


    let [name ,setName] = useState("") ;

    return(
        <div>
            <p>Enter your name:</p>
            <input type="text" 
            onChange={(e)=>{setName(e.target.value)}}
            value={name}/>
            {
            name && <p>Hello {name}!</p>
            }
        </div>
    )
}

export default Input ;