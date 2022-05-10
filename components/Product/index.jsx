import styles from "./styles.module.scss";


const Product = ({ productData }) => {
    const { title, image, price, description } = productData;
  
    return (
      <article className={styles.Product}>

        <img src={image} alt={title} />
        <h4>{title}</h4>
        <p>{price}</p>
        <p>{description}</p>
      </article>
    );
  }

  export default Product;