import styles from "./styles.module.scss";

import Image from 'next/image';

const Product = ({ productData }) => {
    const { title, image, price, description } = productData;
  
    return (
      <article className={styles.Product}>
        <Image src={image} alt={title} width="1049px" height="1500px" />
        <h4 className={styles.Product__title}>{title}</h4>
        <p className={styles.Product__price}>{price}</p>
        <p className={styles.Product__description}>{description}</p>
      </article>
    );
  }

  export default Product;