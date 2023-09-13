import React from "react";
import classes from "./LandingOffer.module.scss";
import { LandingSaleLinkType, ProductsType } from "../../../types";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setFilterSale } from "../../../redux/filter";

interface Props {
  product: ProductsType | LandingSaleLinkType;
  index: number;
}

const LandingOffer: React.FC<Props> = ({ product, index }) => {
  const dispatch = useAppDispatch();

  const handleSale = (onSale: boolean) => {
    dispatch(setFilterSale(onSale));
  };

  return (
    <>
      {index !== 1 ? (
        <Link to={`product/${product.id}`} className={classes.container}>
          <img src={product.imageCover} alt={product.name} />
          <p className={classes.product}>{product.name}</p>
        </Link>
      ) : (
        <Link
          to={`${product.link}`}
          className={classes.container}
          onClick={() => handleSale(true)}
        >
          <img src={product.imageCover} alt={product.name} />

          <p className={classes.sale}>SALE</p>
        </Link>
      )}
    </>
  );
};

export default LandingOffer;
