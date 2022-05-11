import styles from "./styles.module.scss";

import Image from 'next/image';

const Product = ({ productData }) => {
    const { title, image, price, description } = productData;
  
    return (
      <article className={styles.Product}>
        <Image src={image} alt={title} width="1049px" height="1500px" />
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{description}</p>
      </article>
    );
  }

  export default Product;