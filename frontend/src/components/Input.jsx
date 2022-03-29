import React from "react";
import "./Input.css";

const Input = (props) => {
  var { type, place } = props;
  return (
    <div>
      <input
        type={type || "text"}
        placeholder={place}
        className="input"
        {...props.register}
      />
    </div>
  );
};

export default Input;
