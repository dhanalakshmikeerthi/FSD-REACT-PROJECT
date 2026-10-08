import React, { useState } from "react";
import Card from "./Card.jsx";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      description:
        "Premium wireless headphones with noise cancellation and powerful bass.",
      price: 2499,
      range: "10 meters",
      rating: 4.5,
      status: "new",
      brand: "Sony",
      image: "https://picsum.photos/300/200?random=1",
    },

    {
      id: 2,
      name: "Smart Watch",
      description:
        "Fitness smart watch with heart rate monitoring and activity tracking.",
      price: 3999,
      range: "15 meters",
      rating: 4.3,
      status: "old",
      brand: "Noise",
      image: "https://picsum.photos/300/200?random=2",
    },

    {
      id: 3,
      name: "Bluetooth Speaker",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1799,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=3",
    },

    {
      id: 4,
      name: "Gaming Mouse",
      description:
        "High precision gaming mouse with RGB lighting and fast response.",
      price: 1299,
      range: "8 meters",
      rating: 4.7,
      status: "old",
      brand: "Logitech",
      image: "https://picsum.photos/300/200?random=4",
    },

    {
      id: 5,
      name: "Keyboard",
      description:
        "Mechanical gaming keyboard with RGB backlight and blue switches.",
      price: 1999,
      range: "5 meters",
      rating: 4.4,
      status: "new",
      brand: "Redragon",
      image: "https://picsum.photos/300/200?random=5",
    },

    {
      id: 6,
      name: "Mouse Pad",
      description:
        "Mouse pad with advanced features.",
      price: 1999,
      range: "5 meters",
      rating: 3.4,
      status: "old",
      brand: "Redragon",
      image: "https://picsum.photos/300/200?random=6",
    },

    {
      id: 7,
      name: "Keyboard",
      description:
        "Mechanical gaming keyboard with RGB backlight and blue switches.",
      price: 1990,
      range: "5 meters",
      rating: 4.4,
      status: "new",
      brand: "Redragon",
      image: "https://picsum.photos/300/200?random=7",
    },

    {
    id: 8,
      name: "Drone",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1699,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=8",
    },

    {
    id: 9,
      name: "Computer",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1799,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=9",
    },

    {
    id: 10,
      name: "Laptop",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1789,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=10",
    },
{
    id: 11,
      name: "Monitor",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1599,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=11",
    },
{
    id: 12,
      name: "Speaker",
      description:
        "Portable Bluetooth speaker with powerful sound and deep bass.",
      price: 1999,
      range: "20 meters",
      rating: 4.6,
      status: "new",
      brand: "JBL",
      image: "https://picsum.photos/300/200?random=12",
    },



  ]);

  const [status, setStatus] = useState("all");

  // DELETE
  const deleteProduct = (id) => {
    const updatedProducts = products.filter(
      (product) => product.id !== id
    );

    setProducts(updatedProducts);
  };

  // UPDATE
  const updateProduct = (id) => {
    const newName = prompt("Enter new product name:");

    if (newName === null || newName.trim() === "") {
      return;
    }

    const updatedProducts = products.map((product) => {
      if (product.id === id) {
        return {
          ...product,
          name: newName,
        };
      }

      return product;
    });

    setProducts(updatedProducts);
  };

  return (
    <div className="app">

      <h1>Product Store</h1>

      <div className="filter-buttons">

        <button onClick={() => setStatus("all")}>
          All
        </button>

        <button onClick={() => setStatus("new")}>
          New
        </button>

        <button onClick={() => setStatus("old")}>
          Old
        </button>

      </div>

      <Card
        products={products}
        status={status}
        deleteProduct={deleteProduct}
        updateProduct={updateProduct}
      />

    </div>
  );
}

export default App;