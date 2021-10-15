import React from "react";
import './style.css';

const Title = ({ className, children }) => {
  return (
    <h4 className={className}>{children}</h4>
  );
}

export default Title;
