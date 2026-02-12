import React from "react";
import { useState } from "react";
import './Css_files/Q1.css'
function Q1Counter(){
    const [count,setCount]=useState(0);
    let Increment=()=>{
        setCount(count+1);
    }
    return(
        <div className="counter">
            <h2>Counter</h2>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
        </div>
        
    )
}

export default Q1Counter;