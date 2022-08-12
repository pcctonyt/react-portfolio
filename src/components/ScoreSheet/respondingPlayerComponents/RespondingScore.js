import React, { useContext } from 'react'
import { GlobalContext } from "../context/GlobalState";

const plusTextStyle = {
  color: "green",
  textAlign: "center",
  fontSize: "4rem"
}

const minusTextStyle = {
  color: "red",
  textAlign: "center",
  fontSize: "4rem"
}

const RespondingScore = () => {
  const { respondingTurns } = useContext(GlobalContext);

  const respondingScorePoints = respondingTurns.map(respondingTurn => respondingTurn.scoredPoints);
  const total = respondingScorePoints.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h5>Responding Player's Score Sheet Game Points</h5>
        {total > 0 ? <h1 style={plusTextStyle}>{ total }</h1> : <h1 style={minusTextStyle}>{ total }</h1>}
    </>
  )
}

export default RespondingScore;