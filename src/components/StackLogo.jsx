import React from "react";

const StackLogo = (props) => {
  const {src, alt, size, className, title} = props;
  const defaultSize = "max-h-12";

  return <img src={src} alt={alt} title={title} className={`${size} ? ${size} : ${defaultSize} ${className}`} />;
};

export default StackLogo;
