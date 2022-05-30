import React from "react"; 

function ResultGoal(props) {
    const isGoal = props.goal;
    if (isGoal) {
      return <h1>Goal</h1>;
    }
    return <h1>Missed</h1>;
}

export default ResultGoal