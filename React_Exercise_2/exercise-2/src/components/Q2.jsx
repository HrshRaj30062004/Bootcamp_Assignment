import React from "react";
import { useState } from "react";
import './Css_files/Q2.css'

function Q2Counter(){
    const [count,setCount]=useState(0);
    let Increment=()=>{
        setCount(count+1);
    }
    let Decrement=()=>{
        setCount(count-1);
    }
    return(
        <div className="counter">
            <h2>Control Counter</h2>
            <p>{count}</p>
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement} disabled={count===0}>Decrement</button>
        </div>
        
    )
}

export default Q2Counter;