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
  return (
    <div>
      <div className="dropdownSelector">
        <Select
          options={nameList}
          style={{
            color: "hsl(0, 0%, 40%)",
            display: "inline-block",
            fontSize: 12,
            fontStyle: "italic",
            marginTop: "1em",
          }}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Input;
