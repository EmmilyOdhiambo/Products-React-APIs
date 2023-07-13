import React, { useState, useEffect } from "react";
import "./style.css";
import { Link } from "react-router-dom";
const MainPage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://dummyjson.com/products");
      const result = await response.json();
      setProducts(result.products);
    })();
  }, []);
  return (
    <div className="container">
      {products.map((product) => (
        <>
          <img alt="img" src={product.images[2]} className="images"/>
          <h3>{product.title}</h3>
          <br/>
          <p>{product.price}</p>
          <br/>
          <p>{product.discountPercentage}</p>
          <Link to={`/product/${product.id}`} className="btn">
            <button type="submit" className="view">View</button>
          </Link>
        </>
      ))}
    </div>
  );
};
export default MainPage;