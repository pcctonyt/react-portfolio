import React from "react";

const DetSpecs = () => {
  return (
    <div className="det-specs container-fluid" id="specs">
        <h1 className="text-center">Deterrence Technical Specifications</h1>
        <main id="main-doc">
            <section className="main-section" id="Nuclear_And_SDI_Units">
                <header>Nuclear And SDI Units</header>
                <code></code>
            
                <ul>Nuclear Units
                    <li>Fixed Tactical Nuclear, or FTN, Unit</li>
                    <li>Mobile Tactical Nuclear, or MTN, Unit</li>
                    <li>Fixed Intermediate Nuclear, or FIN, Unit</li>
                    <li>Mobile Intermediate Nuclear, or MIN, Unit</li>
                    <li>Strategic Nuclear, or SN, Unit</li>
                </ul>
                <ul>SDI Defense Units
                    <li>Fixed SDI Defense, or FSDI, Unit</li>
                    <li>Mobile SDI Defense, or MSDI, Unit</li>
                </ul>
                <p></p>
                <p></p>
            </section>
            <section className="main-section" id="Treaty_Chart">
                <header>Treaty Chart</header>
                <code></code>
                <p>Deterrence uses a Treaty Negotiations Chart, which players use to negotiate changes to the Variable Rules and the Game Points Settings.   One, some, or all of these either Variable Rules or Game Points Settings can be changed.  Each player has one opportunity to ask (using code 'BNEG' on the Score Sheet) the other player for changes at any point during the game prior to the game ending (i.e.: win, draw, or loss, see 'Complete Rules-Game Endings').</p>
                <p>When asked, a player may refuse a treaty altogether or the players cannot agree to all of the same changes (the game retains all of the Default Settings, code 'ENEG-N' on the Score Sheet), or agree to the changes when the other player asks (Default Settings then change, code 'ENEG-Y' on the Score Sheet for the 1st, or 'ENEG-R' for the 2nd Treaty).</p>
            </section>
            <section className="main-section" id="Score_Sheet">
                <header>Score Sheet</header>
                <code></code>
                <p>The Score Sheet allows players to record one another's Complete Turns and also any Game Points earned or deducted during that Complete Turn (i.e. Game Points Penalties (-1 to -10) or Game Points Bonuses (+1 to +10) or 0, meaning neither.  These points then become the Score Sheet Game Points.</p>
                <p>The Score Sheet must be signed at the end of the game after each player has added all of that player's Score Sheet Points, and then the Cash Value Points.  If a player forgets to add a Points Bonus associated with the 'just completed' Turn, the other player can claim them before that player's turn by placing them in his column (similar to Cribbage).  Both players are responsible for their Score Sheet Game Points totals being equal on each of their Score Sheets at the end of the game.</p>
            </section>
            <section className="main-section" id="Complete_Turns">
                <header>Complete Turns</header>
                <code></code>
                <p>A Complete Turn contains all Move Elements made during that turn.  Most turns contain only one one move element, such as a turn executing a Conventional Unit's movement.  However, certain Complete Turns contain two Move Elements (mainly the Hand Off 'HO', Drop Off 'DO', or Pick Up 'PU' movements of Nuclear or SDI Defense Units), and a total of two Complete Turns can contain three Move Elements (the 'Protect the President' turns, while also declaring an Envoy or Arming 'AR' Nukes ).</p>
                <p>Move Elements tell which Unit moves to which square.  They need to each have a movement code for the square on the board selected to move the Unit to as well as the Unit Code, telling which Unit moved there.  Note: Fixed Nuclear Units and Fixed SDI Defense Units cannot move.</p>
            </section>
            <section className="main-section" id="Points_Types"> 
                <header>Points Types</header>
                <code></code>
                <p><u>Outcome Points:</u>  Outcome Points determine the outcome of the entire game.  One Outcome Point is for the positional result, the other is for the Game Points result (see below paragraph).
                If the Starting Player wins, it could be either 2.0 - 0.0 or 1.5 to .5.  If the Responding Player wins, it could be either 0.5 - 1.5 or 0.0 - 2.0.  If the game is drawn, it would be 1.0 - 1.0.  Either player can win the Positional and/or the Game Points Outcome Point, or share each through a drawn position and each having the same number of Game Points. 
                </p>
                <p><u>Game Points:</u> Game Points are points recorded on the Score Sheet (Score Sheet Game Points) or Points assigned at the end of the position being determined (Cash Value Game Points).  These are then totalled at the end of the game.</p>
            </section>
            <section className="main-section" id="Code_Examples">
                <header>Code Examples</header>
                <code></code>
                <p>Movement Codes ('a1'-'h8'): The board, as in chess, has 64 squares.  The ranks are the horizontal lines, the files are the vertical lines.  Rank 'a' and file '1' describe square 'a1', to the starting player's lower-left corner of the board.  Square 'h8' is the responding player's lower-right corner of the board.  The code used on the Score Sheet for movement is the final resting place of that Unit.The starting square of that Unit does not need to be recorded.</p>
                <p>Unit Codes: Infantry ((no code) only enter the square moved to), Lieutenant (L), Airdrop (A), Sergeant (S), General (G), President (P), declared Envoy (E).  The Nuclear and SDI Defense Unit codes are in that above Section.</p>
            </section>              
        </main> 
    </div>
  )
}

export default DetSpecs;