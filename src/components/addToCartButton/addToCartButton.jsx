import React from "react";
import './addToCartButton.css';


export default function AddToCartButton ({onClick}) {
    return(
        <button className="addToCartButton" onClick={onClick}>Add to Cart</button>
    );
};
