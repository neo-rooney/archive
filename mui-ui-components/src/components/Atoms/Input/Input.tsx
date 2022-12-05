import React from "react";

export interface InputProps {
  label: string;
}

const Input = (props: InputProps) => {
  return (
    <div>
      <div>{props.label}</div>
      <input type="text" />
    </div>
  );
};

export default Input;
