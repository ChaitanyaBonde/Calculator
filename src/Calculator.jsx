import React, { useState } from "react";
import "./Calci.css";

function Calculator() {
   const[value, setvalue] =  useState("")

  return (
    <>
      <div className="back">
        <div className="in">
          <input className="txt" type="text" value={value}/>
          <div className="grpbtn">
            <input type="button" className="btn btn1" value="Ac" onClick={(e)=>(setvalue(""))} />
            <input type="button" className="btn btn1" value="%" style={{fontSize:"20px"}}  onClick={(e)=>(setvalue(value+ e.target.value))}/>
            <input type="button" className="btn btn1" value="DE" onClick={(e)=>(setvalue(value.slice(0,-1)))} />
            <input type="button" className="btn btn1" value="/"  style={{fontSize:"20px"}} onClick={(e)=>(setvalue(value + e.target.value))}/>
            <input type="button" className="btn btn2" value="7"  onClick={(e)=>(setvalue(value + e.target.value))}/>
            <input type="button" className="btn btn2" value="8"  onClick={(e)=>(setvalue(value + e.target.value))}/>
            <input type="button" className="btn btn2" value="9"  onClick={(e)=>(setvalue(value + e.target.value))}/>
            <input type="button" className="btn btn1" value="*" style={{fontSize:"20px"}}  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="4"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="5"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="6"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn1" value="-" style={{fontSize:"20px"}}  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="1"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="2"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="3"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn1" value="+" style={{fontSize:"20px"}}  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="00"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="0"  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn2" value="." style={{fontSize:"20px"}}  onClick={(e)=>(setvalue(value+e.target.value))} />
            <input type="button" className="btn btn3" value="="  style={{fontSize:"20px"}} onClick={(e)=>(setvalue(eval(value)))}/>
        </div>
        </div>
      </div>
    </>
  );
}

export default Calculator;
