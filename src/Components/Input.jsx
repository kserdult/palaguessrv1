import React, { useState } from "react";
import Select from "react-select";

const Input = ({ setGuesses, guesses, Champions, nameList, setNameList }) => {
  const handleChange = (selectedOption) => {
    nameList.forEach((item, index) => {
      if (item.label === selectedOption.label) {
        setGuesses([Champions[item.value], ...guesses]);
        setNameList(nameList.filter((obj) => obj.value !== item.value));
      }
    });
  };
  const colourStyles = {
    menuList: (styles) => ({
      ...styles,
      background: "black",
    }),
    option: (styles, { isFocused, isSelected }) => ({
      ...styles,
      background: isFocused ? "darkgrey" : isSelected ? "darkgrey" : undefined,
      zIndex: 1,
    }),
    menu: (base) => ({
      ...base,
      zIndex: 100,
    }),
  };
  return (
    <div>
      <div className="dropdownSelector">
        <Select
          options={nameList}
          onChange={handleChange}
          styles={colourStyles}
        />
      </div>
    </div>
  );
};

export default Input;
