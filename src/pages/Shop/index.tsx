import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { removeOldProduct } from "../../redux/products";
import classes from "./Shop.module.scss";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";
import Products from "../../components/Products";

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(removeOldProduct());
  }, []);
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>SHOP</h2>
      <Sort />

      <div className={classes.main}>
        <Filter />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
