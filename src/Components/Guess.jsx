import React from "react";
import { PiArrowFatDownLight, PiArrowFatUpLight } from "react-icons/pi";

const Guess = ({ champion, correct }) => {
  return (
    <div className="guess">
      <div className="guessCard anim1">
        <img src={champion.image} />
      </div>
      <div
        className={`guessCard anim2 ${
          champion.gender === correct.gender ? "correct" : "wrong"
        }`}
      >
        <h2>{champion.gender}</h2>
      </div>
      <div
        className={`guessCard anim3 ${
          champion.class === correct.class ? "correct" : "wrong"
        }`}
      >
        <h2>{champion.class}</h2>
      </div>
      <div
        className={`guessCard anim4 ${
          champion.affiliation === correct.affiliation ? "correct" : "wrong"
        }`}
      >
        <h2>{champion.affiliation}</h2>
      </div>
      <div
        className={`guessCard anim5 ${
          champion.race === correct.race ? "correct" : "wrong"
        }`}
      >
        <h2>{champion.race}</h2>
      </div>
      <div
        className={`guessCard anim6 ${
          champion.damage === correct.damage
            ? "correct"
            : champion.damage.includes(correct.damage) ||
              correct.damage.includes(champion.damage)
            ? "partial"
            : "wrong"
        }`}
      >
        <h2>{champion.damage}</h2>
      </div>
      <div
        className={`guessCard anim7 ${
          champion.projectile === correct.projectile
            ? "correct"
            : champion.projectile.includes(correct.projectile) ||
              correct.projectile.includes(champion.projectile)
            ? "partial"
            : "wrong"
        }`}
      >
        <h2>{champion.projectile}</h2>
      </div>
      <div
        className={`guessCard anim8 ${
          champion.releaseyear === correct.releaseyear ? "correct" : "wrong"
        }`}
      >
        <h2>{champion.releaseyear}</h2>
        {correct.releaseyear > champion.releaseyear ? (
          <PiArrowFatUpLight className="arrow" />
        ) : correct.releaseyear === champion.releaseyear ? (
          ""
        ) : (
          <PiArrowFatDownLight className="arrow" />
        )}
      </div>
    </div>
  );
};

export default Guess;

/*
<div className="guesses">
          <div className="guess">
            <div className="guessCard correct anim1">
              <img src="https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg" />
            </div>
            <div className="guessCard correct anim2">
              <h2>Male</h2>
            </div>
            <div className="guessCard correct anim3">
              <h2>Frontline</h2>
            </div>
            <div className="guessCard correct anim4">
              <h2>Neutral</h2>
            </div>
            <div className="guessCard correct anim5">
              <h2>Human</h2>
            </div>
            <div className="guessCard correct anim6">
              <h2>Direct</h2>
            </div>
            <div className="guessCard correct anim7">
              <h2>Hitscan</h2>
            </div>
            <div className="guessCard correct anim8">
              <h2>2010</h2>
            </div>
          </div>
          <div className="guess">
            <div className="guessCard partial anim1">
              <img src="https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg" />
            </div>
            <div className="guessCard partial anim2">
              <h2>Male</h2>
            </div>
            <div className="guessCard partial anim3">
              <h2>Frontline</h2>
            </div>
            <div className="guessCard partial anim4">
              <h2>Neutral</h2>
            </div>
            <div className="guessCard partial anim5">
              <h2>Human</h2>
            </div>
            <div className="guessCard partial anim6">
              <h2>Direct</h2>
            </div>
            <div className="guessCard partial anim7">
              <h2>Hitscan</h2>
            </div>
            <div className="guessCard partial anim8">
              <h2>2010</h2>
            </div>
          </div>
          <div className="guess">
            <div className="guessCard wrong anim1">
              <img src="https://webcdn.hirezstudios.com/paladins/champion-icons/atlas.jpg" />
            </div>
            <div className="guessCard wrong anim2">
              <h2>Male</h2>
            </div>
            <div className="guessCard wrong anim3">
              <h2>Frontline</h2>
            </div>
            <div className="guessCard wrong anim4">
              <h2>Neutral</h2>
            </div>
            <div className="guessCard wrong anim5">
              <h2>Human</h2>
            </div>
            <div className="guessCard wrong anim6">
              <h2>Direct</h2>
            </div>
            <div className="guessCard wrong anim7">
              <h2>Hitscan</h2>
            </div>
            <div className="guessCard wrong anim8">
              <h2>2010</h2>
            </div>
          </div>
        </div>
        */
