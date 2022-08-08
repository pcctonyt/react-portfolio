import React from "react";
import "./DetCards.css";

const DetCards = () => {
  return (
    <div className="det-cards" id="cards">
        <h1 className="text-center">Example Deterrence Card</h1>
        <div className="label">
            <header>
                <h1 className="bold">Strategic Nuclear Unit</h1>
                <div className="divider"></div>
                <p>Up to 1 each side per game</p>
                <p className="bold">Unit Type: <span className="right">Nuclear Unit</span></p>
            </header>
                <div className="divider lg"></div>
                <div className="units-info">
                    <p className="bold">Use Scoring Code:<span className="right">Cash Value</span></p>
                    <h1>(SN)</h1> <span className="bold right lg-text">0.0</span>
                </div>
                <div className="divider md"></div>
                <div className="daily-value sm-text">
                    <p className="bold no-divider">Fixed Rules (cannot change):</p>
                <div className="divider"></div>
                    <p><span className="bold">Movement:</span><span className="bold right">Cannot Move</span></p>
                    <p className="indent no-divider"><strong className="bold">YIELD:</strong> <span className="right">See Variable Rules Below</span></p>
                <div className="divider"></div>
                    <p className="indent no-divider"><strong className="bold">RANGE: </strong><span className="right">Anywhere on the board</span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Pairs With the President Unit</span></p>
                <div className="divider md"></div>
                    <p><span className="bold">Variable Rules:</span> <span className="right bold">Default Setting:</span></p>
                    <p className="indent no-divider"><i>Promotion</i> moves:<span className="bold right">(Not Applicable)</span></p>
                <div className="divider"></div>
                    <p className="indent">Blocks ground-level attacks: <span className="bold right">Yes</span> </p>
                    <p className="indent no-divider">YIELD #1: <span className="bold right">DEFAULT:  2 x 2 squares</span> </p>
                    <p className="indent no-divider">YIELD #2: <span className="bold right">2 x 3 squares</span>
                    </p>
                    <p className="indent no-divider">YIELD #3: <span className="bold right">3 x 3 <em>County Be Gone!</em></span></p>
                <div className="divider"></div>
                    <p className="no-divider"><span className="bold">Rules for all Fixed Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. Fixed Nuclear Units are only destroyed by opposing Units, they cannot be captured.</p>
                    <p>2. The opponent landing on that square removes it without points.</p>
                    <p>3. The player losing the SN loses no Cash Value Points.</p>
                    <p>4. The destroyed squares in a Firing Move become Fallout Squares, off-limits to all ground-landing Units.</p>
                    <p className="no-divider"><span className="bold">General Rules for Nuclear Units</span></p>
                <div className="divider lg"></div>
                    <p>1. To Fire a Nuclear Unit, it must have been previously Armed.</p>
                    <p>2. Armed Units can be fired unaccompanied within given ranges.</p>
                    <p>3. The Unit fired is removed from the board and the firing player loses those Cash Value Points (for Mobile Units).</p>
                    <p>4. The other player's destroyed Units are removed from the board and all the resulting Cash Value Points are lost.</p>
                    <p>5. All applicable Score Sheet Game Points must be tallied by both players.</p>
                    <p>6. Nuclear Units cannot destroy any Units on squares protected by Fixed SDI Defense.</p>
                    <p>7. Nuclear Units cannot destroy a Unit paired with a Mobile SDI Defense Unit</p>
                    <p>8. Nuclear Units can destroy both friendly and opposing Units (sacrifices).</p>
                </div>
                <div className="divider md"></div>
                    <p className="note">NOTE:  In the event of a Treaty where the use of Nuclear/SDI Units has been turned off, all Movement Codes related to the Strategic Nuclear Unit become illegal (IMD-S).</p>
        </div>
    </div>
  )
}

export default DetCards;