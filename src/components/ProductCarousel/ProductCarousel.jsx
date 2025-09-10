// ProductCarousel.jsx
import React from "react";
import "./ProductCarousel.css";
import AddToCartButton from "../addToCartButton/addToCartButton";

import RealCoverBook1 from "../../assets/RealCoverBook1.png";

const products = [
  { id: 1, image: RealCoverBook1, title: "Lulu & Remi Black", price: "12.99", bgColor: "#47A933", width: 250, height: 420 },
  { id: 2, image: RealCoverBook1, title: "Lulu & Remi Black", price: "12.99", bgColor: "#FBDB37", width: 300, height: 450 },
  { id: 3, image: RealCoverBook1, title: "Lulu & Remi Black", price: "12.99", bgColor: "#FB37B9", width: 250, height: 420},
];

export default function ProductCarousel() {
  return (
    <div className="carousel">
      {products.map((p) => (
        <div key={p.id} className="card" style={{ backgroundColor: p.bgColor, width: p.width, height: p.height }}>
          <img src={p.image} alt={p.title} />
          <h3>{p.title}</h3>
          <p>${Number(p.price).toFixed(2)}</p>
          <AddToCartButton/>
        </div>
      ))}
    </div>
  );
}
