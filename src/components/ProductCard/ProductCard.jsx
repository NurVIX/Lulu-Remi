import React from "react";
import './ProductCard.css';
import AddToCartButton from "../addToCartButton/addToCartButton.jsx";

const ProductCard = ({ Image, Title, Price, bgColor, isLarge }) => {
    return (
        <div className={`productCard ${isLarge ? "largeCard" : ""}`} style = {{ backgroundColor: bgColor }}>
            <img src={Image} alt={Title} className="productImage" />
            <h3>{Title}</h3>
            <p>${Price}</p>
            <AddToCartButton />
        </div>
    );
};

export default ProductCard;