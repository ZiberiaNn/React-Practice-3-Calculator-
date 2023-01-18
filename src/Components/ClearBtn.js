import React from "react";
import "../Stylesheets/ClearBtn.css"

const ClearBtn = (props) => (
    <div className="clear-button" onClick={props.handleClear}>
        {props.children}
    </div>
);

export default ClearBtn;