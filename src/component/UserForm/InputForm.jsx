import React from "react";
import "./inputform.css";
function InputForm(props) {
  return (
    <div className="cont-input">
      <label className="label">{props.title}</label>
      <input
        className="input"
        required
        name={props.name}
        type="text"
        onChange={props.onChange}
      />
    </div>
  );
}

export default InputForm;
