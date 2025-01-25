import React from "react";

const Button = ({ text, background, width, height, onclick }) => {
  return (
    <button
      className={`flex gap-1 items-center justify-center p-5 text-white rounded-lg outline}`}
      style={{
        backgroundColor: `${background}`,
        width: `${width}`,
        height: `${height}`,
      }}
      onClick={onclick}
    >
      <span>{text}</span>
    </button>
  );
};

export default Button;
