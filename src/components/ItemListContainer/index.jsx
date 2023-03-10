import ProductCard from "../ProductCard";

const ItemListContainer = ({ products }) => {
  return (
    <div>
      {products.map((product, i) => {
        return <ProductCard key={i} product={product} />;
      })}
    </div>
  );
};

export default ItemListContainer;
