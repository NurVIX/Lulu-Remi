import React from "react";  
import "./productCarousel.css";
import ProductCard from "../ProductCard/ProductCard.jsx";
import RealCoverBook1 from "../../assets/RealCoverBook1.png";

const ProductDisplayCarousel =() => {
    const products =[
        {id:1, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: 12, bgColor: '#47A933'},
        {id:2, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: 12, bgColor: '#FBDB37', isLarge: true},
        {id:3, Image: RealCoverBook1, Title:"Lulu & Remi Black", Price: 12, bgColor: '#FB37B9'},
    ];
    return(
        <div className="productCarouselContainer">
            {products.map((product) => (
                <ProductCard key={product.id} {...product} />
            ))}
        </div>
    );
};

export default ProductDisplayCarousel;