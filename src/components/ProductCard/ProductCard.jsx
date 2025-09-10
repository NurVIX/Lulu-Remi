import React from "react";
import './ProductCard.css';

import RealCoverBook1 from "../../assets/RealCoverBook1.png";
import AddToCartButton from "../addToCartButton/addToCartButton.jsx";
import SeeDetailButton from "../SeeDetailButton/SeeDetailButton.jsx";

export const products =[
        {id:1, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: "12.99", bgColor: '#47A933'},
        {id:2, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: "12.99", bgColor: '#FBDB37'},
        {id:3, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: "12.99", bgColor: '#FB37B9'},
    ]; 

const ProductCard = ({ product, onAddtoCart, onSeeDetails  }) => {
    const {Image, Title, Price, bgColor} = product;
    
    return (
    <div
      className="productCardcontainer"
      style={{ '--card': bgColor || '#f3f3f3' }}
    >
      <img src={Image} alt={Title} className="productImage" />
      <h3 className="productTitle">{Title}</h3>
      <p className="productPrice">${Number(Price).toFixed(2)}</p>
      <div className="CardButtonAction">
        {onAddtoCart && <AddToCartButton onClick={() => onAddtoCart(product)} />}
        {onSeeDetails && <SeeDetailButton onClick={() => onSeeDetails(product)} />}
      </div>
    </div>
    );
};

export default ProductCard;