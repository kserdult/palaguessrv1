import React, { useState } from "react";
import "../Styles/main.css";
import GuessBox from "../Components/GuessBox";
import { Champions } from "../data/data.js";
import Input from "../Components/Input.jsx";

const Main = () => {
  const [correct, setCorrect] = useState(Champions[0]);
  console.log(correct);
  return (
    <div>
      <nav>
        <h1>PalaGuessr</h1>
      </nav>
      <div>
        <Input />
      </div>
      <div className="guesses">
        <GuessBox Champions={Champions} correct={correct} />
      </div>
    </div>
  );
};

export default Main;
