import React from "react";

const Popup = (props) => {
  return (props.trigger) ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn btn btn-primary" onClick={() => props.setTrigger(false)}>close</button>
            { props.children }
        </div>
    </div>
  ) : "";
}

export default Popup;