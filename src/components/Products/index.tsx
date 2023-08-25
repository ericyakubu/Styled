import React from "react";
import classes from "./Products.module.scss";
import Product from "./Product";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "../../redux";

const Products = () => {
  const { products } = useSelector((state: RootState) => state.products);

  //TODO add loading circle
  return (
    <div className={classes.container}>
      {products.map((product, i) => (
        <Product product={product} key={`product_key_${i}`} />
      ))}
    </div>
  );
};

export default Products;
