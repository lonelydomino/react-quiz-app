import React from "react";

const FinishScreen = ({ points, maxPossiblePoints }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  return (
    <div className="result">
      You scored{" "}
      <strong>
        {points} out of {maxPossiblePoints}
      </strong>
      ({Math.ceil(percentage)})
    </div>
  );
};

export default FinishScreen;
