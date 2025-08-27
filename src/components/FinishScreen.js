import React from "react";
import { useQuiz } from "../context/QuizContext";

const FinishScreen = () => {
  const { points, maxPossiblePoints, highscore, dispatch} = useQuiz()
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
