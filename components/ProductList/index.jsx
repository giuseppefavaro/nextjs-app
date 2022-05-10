import { useState, useEffect } from "react";
import Product from "../Product";

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  return (
    productsData &&
    productsData.map((product) => <Product productData={product} />)
  );
}

export default ProductList;