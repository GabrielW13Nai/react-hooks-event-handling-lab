import React from "react";

function EyesOnMe(){
    return <button className="focus" onFocus={focus} onBlur={blur}>Eyes on me</button> 
}

function focus(){
    return(console.log('Good'));
}
function blur(){
    return(console.log('Hey! Eyes on me'));
}
export default EyesOnMe
