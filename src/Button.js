import React from "react";
import classes from "./ButtonModule.css";
import bootstrap from "bootstrap";
const Button = (props) => {
  return (
    <button className={props.className} type={props.type} >
      <span >{props.name}</span>
    </button>
  );
};

export default Button;
