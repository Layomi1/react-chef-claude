import React from "react";
import { PiChefHatFill } from "react-icons/pi";

const Header = () => {
  return (
    <div className="flex gap-1 bg-white justify-center items-center w-full h-20 shadow-md font-medium text-5xl">
      <PiChefHatFill />
      <h1>Chef Claude</h1>
    </div>
  );
};

export default Header;
