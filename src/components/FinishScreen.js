import React from "react";

const FinishScreen = ({ points, totalPoints, highscore }) => {
  return (
    <>
      <p className="result">
        You scored <span>{points}</span> out of {totalPoints} points (
        {Math.round((points / totalPoints) * 100)}%)
      </p>
      <p className="highscore">Highscore: {highscore} points</p>
    </>
  );
};

export default FinishScreen;
