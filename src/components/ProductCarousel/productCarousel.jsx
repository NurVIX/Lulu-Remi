import React from "react";  
import "./productCarousel.css";
import ProductCard, {products} from "../ProductCard/ProductCard.jsx";


export default function ProductDisplayCarousel () {
    const handleAddToCart = (product) => {
        console.log("Add to Cart clicked for product:", product);
    };
    
    return(
        <div className="productCarouselContainer">
            {products.map((p) => (
                <ProductCard key={p.id} 
                product={p}
                onAddtoCart ={handleAddToCart}
                />
            ))}
        </div>
    );
};
