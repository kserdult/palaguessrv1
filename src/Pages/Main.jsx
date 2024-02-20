import React, { useEffect, useState } from "react";
import "../Styles/main.css";
import GuessBox from "../Components/GuessBox";
import { Champions } from "../data/data.js";
import Input from "../Components/Input.jsx";
import { names } from "../data/data";

const Main = () => {
  const [guesses, setGuesses] = useState([]);
  const [correct, setCorrect] = useState();
  const [nameList, setNameList] = useState(names);
  const [champList, setChampList] = useState(Champions);
  const [end, setEnd] = useState(false);
  const newGame = () => {
    setGuesses([]);
    setChampList(Champions);
    setCorrect(champList[Math.floor(Math.random() * champList.length)]);
    setNameList(names);
    setEnd(false);
    localStorage.removeItem("guesses");
    localStorage.removeItem("correct");
    localStorage.removeItem("nameList");
    localStorage.removeItem("champList");
  };
  useEffect(() => {
    //newGame();
    const localGuesses = localStorage.getItem("guesses");
    const localCorrect = localStorage.getItem("correct");
    const localNameList = localStorage.getItem("nameList");
    const localChampList = localStorage.getItem("champList");
    if (localGuesses) {
      setGuesses(JSON.parse(localGuesses));
      setCorrect(JSON.parse(localCorrect));
      setNameList(JSON.parse(localNameList));
      setChampList(JSON.parse(localChampList));
    } else {
      newGame();
    }
  }, []);
  useEffect(() => {
    if (guesses.length >= 1) {
      localStorage.setItem("guesses", JSON.stringify(guesses));
      localStorage.setItem("correct", JSON.stringify(correct));
      localStorage.setItem("nameList", JSON.stringify(nameList));
      localStorage.setItem("champList", JSON.stringify(champList));
    }
    guesses.forEach((item) => {
      if (item.name === correct.name) {
        setEnd(true);
      }
    });
  }, [guesses]);
  return (
    <div>
      <nav>
        <h1>PalaGuessr</h1>
      </nav>
      <div>
        <Input
          setGuesses={setGuesses}
          guesses={guesses}
          Champions={champList}
          nameList={nameList}
          setNameList={setNameList}
        />
      </div>
      <div className="guesses">
        <GuessBox Champions={guesses} correct={correct} />
      </div>
      <div className={end ? "" : "hideEnd"}>
        <div className="endScreen">
          <h1 className="endTitle">Congratulations!</h1>
          <p>You correctly guessed the champion.</p>
          <button className="endButton" onClick={() => newGame()}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Main;
