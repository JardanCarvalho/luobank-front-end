import React from "react";
import './style.css';

const Title = ({className,children}) => {
  return (
    <p className={className}>{children}</p>
  );
}

export default Title;
