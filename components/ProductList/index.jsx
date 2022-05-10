import { useState, useEffect } from "react";
import Product from "../Product";

import styles from "./styles.module.scss";

const ProductList = () => {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProductsData(data));
  }, []);

  return (
    <section className={styles.ProductList}>
      { productsData &&
      productsData.map((product) => <Product productData={product} />) }
    </section>
  );
}

export default ProductList;