import React from "react";

const Form = ({ handleSubmit, handleChange, children }) => {
  const styleMargin = {
    marginRight: "1em",
  };
  return (
    <>
      <form className="form" style={{ margin: ".5rem" }} >
        <label className="form-label" style={styleMargin}>
          Date
        </label>
        <input
          className="mr-3 col-md-2 col-8"
          style={styleMargin}
          type="date"
          onChange={handleChange}
        ></input>
        {children}
      </form>
    </>
  );
};

export default Form;
