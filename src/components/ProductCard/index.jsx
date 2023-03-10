import styles from "./productCard.module.css";

const ProductCard = ({ product }) => {
  return (
    <main className={styles.container}>
      <div className={styles.box}>
        <h4 className={styles.title}>{product.title}</h4>
        <p>{product.description}</p>
        <p className={styles.price}>$ {product.price} USD</p>
      </div>
      <img src={product.image} alt={product.title} />
    </main>
  );
};

export default ProductCard;
