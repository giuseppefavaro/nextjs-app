const Product = ({ productData }) => {
    const { title, image, price, description } = productData;
  
    return (
      <div>
        <h1>{title}</h1>
        <img src={image} alt={title} />
        <p>{price}</p>
        <p>{description}</p>
      </div>
    );
  }

  export default Product;