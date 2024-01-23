import React from "react";
import Guess from "./Guess";
import Labels from "./Labels";

const GuessBox = ({ Champions, correct }) => {
  return (
    <div className="guessBox">
      <Labels />
      <div className="guesses">
        {Champions.map((champion) => {
          return (
            <Guess champion={champion} correct={correct} key={champion.id} />
          );
        })}
      </div>
    </div>
  );
};

export default GuessBox;
