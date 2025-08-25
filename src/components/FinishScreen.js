import React from "react";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <>
      <p className="result">
        You scored{" "}
        <strong>
          {points} out of {maxPossiblePoints}
        </strong>
        ({Math.ceil(percentage)}%)
      </p>
      <p className="highscore">High score : {highscore}</p>
      <button onClick={() => dispatch({type: 'restart'})}>Restart</button>
    </>
  );
};

export default FinishScreen;
