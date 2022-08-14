import React from "react";
import "./Popup.css";

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className=" btn btn-primary" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup;