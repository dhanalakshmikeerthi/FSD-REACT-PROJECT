import React from "react";
import ProductCard from "./ProductCard.jsx";
import "./Card.css";

const Card = ({
  products,
  status,
  deleteProduct,
  updateProduct,
}) => {

  const filteredProducts =
    status === "all"
      ? products
      : products.filter(
          (product) => product.status === status
        );

  return (
    <div className="cards-container">

      {filteredProducts.map((product) => (

        <ProductCard
          key={product.id}
          product={product}
          deleteProduct={deleteProduct}
          updateProduct={updateProduct}
        />

      ))}

    </div>
  );
};

export default Card;