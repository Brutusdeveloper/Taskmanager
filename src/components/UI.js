import "./Flames.css";
import React from "react"

const uipart=(props)=>{
return(
    <div>
    <div>
      <label className="label">
        <strong>Name:</strong>
      </label>
      <input className="input" type="text" name="Firstname" onClick={props.makenull}   onChange={props.change}placeholder="Enter the name" />
    </div>
    <br/>
    <div>
      <label className="label">
        <strong>Name:</strong>
      </label>
      <input className="input" type="text" name="Secondname" onClick={props.makenull}   onChange={props.change} placeholder="Enter the name"  />
    </div>
    <h2 style={{color:"green",marginLeft:"5.5rem"}}>{props.relation}</h2>
    <button className="button" onClick={props.matchInput}>Match!</button>
  </div>)
}
export default uipart;