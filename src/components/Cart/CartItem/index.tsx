import React from "react";
import classes from "./CartItem.module.scss";
import { CartItemType } from "../../../types";
import { useAppDispatch } from "../../../redux/hooks";
import { increaseQuantity, decreaseQuantity } from "../../../redux/cart";

interface Props {
  item: CartItemType;
}

const CartItem: React.FC<Props> = ({ item }) => {
  const dispatch = useAppDispatch();

  const handleIncreaseQuantity = (item: CartItemType) => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = (item: CartItemType) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div className={classes.item}>
      <img src={item.imageCover} alt={item.name} className={classes.item_img} />
      <div className={classes.item_details}>
        <h4 className={classes.item_name}>{item.name}</h4>
        <h5 className={classes.item_price}>${item.price}</h5>
        {item.size ? (
          <h5 className={classes.item_size}>
            Size: <span>{item.size}</span>
          </h5>
        ) : null}
      </div>

      <div className={classes.item_quantity}>
        Quantity{" "}
        <div className={classes.item_quantity_controls}>
          <button onClick={() => handleDecreaseQuantity(item)}>-</button>
          {item.quantity}
          <button onClick={() => handleIncreaseQuantity(item)}>+</button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
