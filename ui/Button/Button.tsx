'use client'
import React from "react";
import classes from "./style.module.css";

type PropsButton = {
  text: string;
  clickButton: () => void;
  buttonStyle: string;
};

const Button: React.FC<Partial<PropsButton>> = ({
  text,
  clickButton,
  buttonStyle
}) => {
  
  return (
    <button
      className={buttonStyle}
      onClick={clickButton}
    >
      {text}
    </button>
  );
};

export default Button;