import React from "react";
import classes from "./Cart.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../../../redux/cart";
import { AppDispatch, RootState } from "../../../../redux";

const Cart: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { totalQnty } = useSelector((state: RootState) => state.cart);
  const handleOpenCart = () => {
    dispatch(setShowCart());
  };
  return (
    <button className={classes.cart} onClick={handleOpenCart}>
      <FaCartShopping />
      {totalQnty >= 1 ? <div className={classes.qnty}>{totalQnty}</div> : null}
    </button>
  );
};

export default Cart;
