import React from "react";
import { useState } from "react";
import Child from "./Q3_Child";
import "./Css_files/Q3.css"

function Q3Message(){
    const [message,setMessage] = useState("");
    let handleChange=(event)=>{
        setMessage(event.target.value);
    }
    return(
        <div class="msg">
            <input type="text" value={message} placeholder="Enter text.." onChange={handleChange} />
            <Child message={message}/>
        </div>
    )
}

export default Q3Message;