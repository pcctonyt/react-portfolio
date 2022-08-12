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

const StartingCash = () => {
  const { startingTurns } = useContext(GlobalContext);

  const startingCashPoints = startingTurns.map(startingTurn => startingTurn.cashPoints);
  const total = startingCashPoints.reduce((acc, item) => (acc += item), 39).toFixed(2);

  return (
    <>
        <h5>Starting Player's Cash Value Points</h5>
        {total > 0 ? <h1 style={plusTextStyle}>{ total }</h1> : <h1 style={minusTextStyle}>{ total }</h1>}
    </>
  )
}

export default StartingCash;