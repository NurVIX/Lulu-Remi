import React from "react";
import "./SeeDetailButton.css";

export default function SeeDetailButton ({onClick}) {
    return(
        <button className="seeDetailButton"onClick={onClick}>See Details</button>
    );
};

