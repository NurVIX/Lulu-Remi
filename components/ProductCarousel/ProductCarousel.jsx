"use client";

import { useEffect, useState } from "react";
import { getProducts, createCart, addToCart, getCart } from "../../lib/shopify";
import Image from "next/image";
import styles from "./ProductCarousel.module.css";
import AddToCartButton from "../AddToCartButton/AddToCartButton.jsx";

export default function ProductCarousel() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  // 🛍️ Load Shopify products
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getProducts();

        const formatted = data.map((p) => ({
          id: p.id,
          title: p.title,
          price: p.variants?.edges?.[0]?.node?.price?.amount || "0.00",
          variantId: p.variants?.edges?.[0]?.node?.id,
          image: p.images?.edges?.[0]?.node?.url || "/placeholder.png",
          alt: p.images?.edges?.[0]?.node?.altText || p.title,
        }));

        setProducts(formatted);
      } catch (error) {
        console.error("Error loading products:", error);
      }
    }

    loadProducts();
  }, []);

  // 🛒 Add to cart logic
  const handleAddToCart = async (variantId) => {
    try {
      let cartId = localStorage.getItem("cartId");

      // Create a new cart if it doesn’t exist
      if (!cartId) {
        const cart = await createCart();
        cartId = cart.id;
        localStorage.setItem("cartId", cartId);
      }

      // Add product variant
      const updatedCart = await addToCart(cartId, variantId, 1);

      // Update local state
      setCartItems(
        updatedCart.lines.edges.map((edge) => ({
          id: edge.node.id,
          title: edge.node.merchandise.product.title,
          price: Number(edge.node.merchandise.price.amount),
          image:
            edge.node.merchandise.product.featuredImage?.url ||
            "/placeholder.png",
          quantity: edge.node.quantity,
        }))
      );

      console.log("✅ Added to cart:", updatedCart);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  // 🎨 Card colors and sizes
  const bgColors = ["#47A933", "#FBDB37", "#FB37B9"];
  const cardSizes = [
    { width: 250, height: 420 }, // green
    { width: 300, height: 450 }, // yellow
    { width: 250, height: 420 }, // pink
  ];

  // 🧩 Choose which cards to show
  let visibleCards = [];

  if (products.length === 1) {
    visibleCards = [
      { product: products[0], color: bgColors[0], size: cardSizes[0] },
    ];
  } else if (products.length === 2) {
    visibleCards = [
      { product: products[0], color: bgColors[0], size: cardSizes[0] },
      { product: products[1], color: bgColors[2], size: cardSizes[2] },
    ];
  } else if (products.length >= 3) {
    visibleCards = [
      { product: products[0], color: bgColors[0], size: cardSizes[0] },
      { product: products[2], color: bgColors[1], size: cardSizes[1] },
      { product: products[1], color: bgColors[2], size: cardSizes[2] },
    ];
  }

  return (
    <div className={styles.carouselContainer}>
      {visibleCards.map(({ product, color, size }, i) => (
        <div
          key={product.id || i}
          className={styles.productCard}
          style={{
            backgroundColor: color,
            width: size.width,
            height: size.height,
            borderRadius: "25px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
          }}
        >
          <Image
            src={product.image}
            alt={product.alt}
            width={size.width - 40}
            height={size.height - 100}
            className={styles.productImage}
          />
          <h3 className={styles.productTitle}>{product.title}</h3>
          <p className={styles.productPrice}>
            ${Number(product.price).toFixed(2)}
          </p>
          <AddToCartButton onClick={() => handleAddToCart(product.variantId)} />
        </div>
      ))}
    </div>
  );
}
