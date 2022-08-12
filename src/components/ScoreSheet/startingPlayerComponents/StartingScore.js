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

const StartingScore = () => {
  const { startingTurns } = useContext(GlobalContext);

  const startingScorePoints = startingTurns.map(startingTurn => startingTurn.scoredPoints);
  const total = startingScorePoints.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
        <h5>Starting Player's Score Sheet Game Points</h5>
        {total > 0 ? <h1 style={plusTextStyle}>{ total }</h1> : <h1 style={minusTextStyle}>{ total }</h1>}
    </>
  )
}

export default StartingScore;