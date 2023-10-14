import React from "react";
import classes from "./Product.module.scss";
import { ProductsType } from "../../../types";
import { Link } from "react-router-dom";

interface Props {
  product: ProductsType;
}

const Product: React.FC<Props> = ({ product }) => {
  const onSale = product.discount || product.priceDiscount;
  let discount;
  let finalPrice;

  if (product?.discount) discount = product.discount;
  if (product?.priceDiscount) {
    discount = Math.ceil((product.priceDiscount / product.price) * 100);
  }

  if (product.discount) {
    const holder = product.price - product.price * (product.discount / 100);

    finalPrice = Number(holder.toFixed(2));
  }
  if (product.priceDiscount) {
    const holder = product.price - product.priceDiscount;

    finalPrice = Number(holder.toFixed(2));
  }

  return (
    <>
      {product && (
        <Link to={`/product/${product.id}`} className={classes.container}>
          <img src={product.imageCover} alt={product.name} />
          <h6 className={classes.name}>{product.name}</h6>
          <h6 className={classes.price}>
            {onSale ? (
              <>${finalPrice}</>
            ) : (
              <>${product.price ? product.price.toFixed(2) : null}</>
            )}
            {onSale ? <span>was: ${product.price}</span> : null}
          </h6>

          {onSale ? (
            <>
              <div className={classes.on_sale}>
                <p>
                  <span>on sale</span>
                  <span>-{discount}%</span>
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
