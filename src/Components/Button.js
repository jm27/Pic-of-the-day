import React from "react";

const Button = ({
  name = "Pick a Date",
  className = "btn btn-outline-dark m-2",
  onclick,
}) => {
  return (
    <>
      <button type="button" className={className} onClick={onclick}>
        {name}
      </button>
    </>
  );
};

export default Button;
