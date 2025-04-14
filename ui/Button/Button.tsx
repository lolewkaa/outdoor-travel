'use client'
import React from "react";
import { PropsButton } from "./types";

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