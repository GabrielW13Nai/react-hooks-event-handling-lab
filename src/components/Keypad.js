import React from "react";

function Keypad (){
  
    return (
        <div>
            <input 
            type= "password"
            name="password" 
            placeholder="Password"
            onChange= {Change}
            />
        </div>
    )
}

function Change(){
    console.log("Entering password...");
}

export default Keypad;