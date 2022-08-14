/* COPY OF DET SCORE SHEET WITH MINOR CHANGES TO HOOK UP TO PORTFOLIO*/

import React from "react";

import StartingHeader from "./startingPlayerComponents/StartingHeader";
import StartingScore from "./startingPlayerComponents/StartingScore";
import StartingCash from "./startingPlayerComponents/StartingCash";
import StartPlusMinusPoints from "./startingPlayerComponents/StartPlusMinusPoints";
import StartTurnList from "./startingPlayerComponents/StartTurnList";
import AddStartingTurn from "./startingPlayerComponents/AddStartingTurn";

import RespondingHeader from "./respondingPlayerComponents/RespondingHeader";
import RespondingCash from "./respondingPlayerComponents/RespondingCash";
import RespondingScore from "./respondingPlayerComponents/RespondingScore";
import RespondPlusMinusPoints from "./respondingPlayerComponents/RespondPlusMinusPoints";
import RespondTurnList from "./respondingPlayerComponents/RespondTurnList";
import AddRespondingTurn from "./respondingPlayerComponents/AddRespondingTurn";
import "./ScoreSheet.css";

import { GlobalProvider } from "./context/GlobalState";

const ScoreSheet = () => {
  return (
    <GlobalProvider>
      <div className="score-sheet-wrapper">
          <header className="app-header">
            <h1>Deterrence Score Sheet</h1>
          </header>
          
            <span className="score-container starter">
              <StartingHeader />
              <StartingScore />
              <StartingCash />
              <StartPlusMinusPoints />
              <StartTurnList />
              <AddStartingTurn />
            </span>
            <span className="score-container responder">
            <RespondingHeader />
            <RespondingScore />
            <RespondingCash />
            <RespondPlusMinusPoints />
            <RespondTurnList />
            <AddRespondingTurn />
          </span>
        
          
          
          
      </div>
    </GlobalProvider>
  )
};

export default ScoreSheet;
