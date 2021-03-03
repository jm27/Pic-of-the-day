import React from "react";

const Icon = ({
  iconName = "fa-1x fab fa-linkedin-in fa-stack-1x fa-inverse",
}) => {
  return (
    <>
      <span className="fa-stack fa-lg">
        <i className="fa fa-circle fa-stack-2x"></i>
        <i className={iconName}></i>
      </span>
    </>
  );
};

export default Icon;
