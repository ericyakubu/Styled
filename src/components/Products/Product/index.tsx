import React from "react";
import classes from "./Product.module.scss";
import { ProductsType } from "../../../types";
import { Link } from "react-router-dom";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  return (
    <>
      {product && (
        <Link to={`/product/${product.id}`} className={classes.container}>
          <img src={product.imageCover} alt={product.name} />
          <h6 className={classes.name}>{product.name}</h6>
          <h6 className={classes.price}>${product.price.toFixed(2)}</h6>

          {product.discount || product.priceDiscount ? (
            <>
              <div className={classes.on_sale}>
                <p>
                  <span>on sale</span>
                  {product.priceDiscount ? (
                    <span>{`-${product.priceDiscount}$`}</span>
                  ) : (
                    <span>{`-${product.discount}%`}</span>
                  )}
                </p>
              </div>
            </>
          ) : null}
        </Link>
      )}
    </>
  );
};

export default Product;
