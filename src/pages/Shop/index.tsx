import React from "react";
import classes from "./Shop.module.scss";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";
import Products from "../../components/Products";

const Shop: React.FC = () => {
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
