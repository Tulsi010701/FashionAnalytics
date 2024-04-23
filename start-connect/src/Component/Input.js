import React from "react";

const Input = (props) => {
  return (
    <>
      <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
        className="form-control rounded-0"
      ></input>
    </>
  );
};

export default Input;
