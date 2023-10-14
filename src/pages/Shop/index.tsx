import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { removeOldProduct } from "../../redux/products";
import classes from "./Shop.module.scss";
import Sort from "../../components/Sort";
import Filter from "../../components/Filter";
import Products from "../../components/Products";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Shop: React.FC = () => {
  const dispatch = useAppDispatch();

  const { onSale } = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    dispatch(removeOldProduct());
  }, []);
  return (
    <div className={classes.container}>
      <h1 className={classes.title}>
        SHOP
        {onSale ? <p>Get it while it's hot</p> : null}
      </h1>

      <Sort />

      <main className={classes.main}>
        <div className={classes.filter}>
          <Filter />
        </div>
        <Products />
      </main>
    </div>
  );
};

export default Shop;
