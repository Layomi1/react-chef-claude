import React from "react";
import Button from "./Button";

const SearchBar = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} method="POST" className="flex gap-2  ">
      <input
        type="text"
        aria-label="Add ingredient"
        placeholder="eg. sugar"
        name="ingredient"
        className=" w-[450px] shadow-sm pl-4 h-17 rounded-lg "
      />
      <Button
        text="+ Add Ingredient"
        className={`text-sm h-7 `}
        background={"black"}
        width={"250px"}
        height={"64px"}
      />
    </form>
  );
};

export default SearchBar;
