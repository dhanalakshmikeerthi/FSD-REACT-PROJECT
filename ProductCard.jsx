import React from "react";
import "./ProductCard.css";

const ProductCard = ({
  product,
  deleteProduct,
  updateProduct,
}) => {

  return (
    <div className="product-card">

      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-content">

        <h2>{product.name}</h2>

        <p className="brand">
          Brand: {product.brand}
        </p>

        <p className="description">
          {product.description}
        </p>

        <p>
          📡 Range: {product.range}
        </p>

        <p>
          ⭐ Rating: {product.rating}
        </p>

        <h3>
          ₹{product.price}
        </h3>

        <span className={`status ${product.status}`}>
          {product.status.toUpperCase()}
        </span>

        <button
          className="update-button"
          onClick={() => updateProduct(product.id)}
        >
          Update
        </button>

        <button
          className="delete-button"
          onClick={() => deleteProduct(product.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
};

export default ProductCard;