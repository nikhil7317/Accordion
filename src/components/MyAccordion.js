import React, { useState } from "react";

function MyAccordion(props){

    const[show, setShow] = useState(false)
    function showData(){
        setShow(true)
    }
    return(
       <div>
        <div >
            
            <h1 align="right">{props.question}</h1>
            <p align="left" onClick={showData}>➕</p>
            {show && <p>{props.answer}</p>}
        </div>
        
        </div>  
    )
}
export default MyAccordion