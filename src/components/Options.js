import React from "react";
import { useQuiz } from "../context/QuizContext";

const Options = () => {
  const { questions, index, dispatch, answer} = useQuiz()
  const hasAnswered = answer !== null;
  const currentQuestion = questions[index]

  return (
    <div className="options">
      {currentQuestion.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? "answer" : ""} ${
            hasAnswered
              ? index === currentQuestion.correctOption
                ? "correct"
                : "wrong"
              : ""
          }`}
          key={currentQuestion.option}
          disabled={hasAnswered}
          onClick={() => dispatch({ type: "newAnswer", payload: index })}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default Options;
