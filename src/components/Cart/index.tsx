import React, { useRef } from "react";
import classes from "./Cart.module.scss";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setShowCart } from "../../redux/cart";
import { AppDispatch, RootState } from "../../redux";
import CartItem from "./CartItem";
import { immediateCheckout } from "../../redux/cart/asyncActions";

import { FaCartShopping } from "react-icons/fa6";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeContainerOutside = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.target === containerRef.current) dispatch(setShowCart());
  };
  const closeContainer = () => dispatch(setShowCart());

  const handleCheckout = () => dispatch(immediateCheckout(items));

  return (
    <div
      className={classes.container}
      ref={containerRef}
      onClick={closeContainerOutside}
    >
      <div className={classes.cart_main}>
        <button onClick={closeContainer} className={classes.cart__close}>
          <MdClose />
        </button>

        <section
          className={`${classes.list} ${
            !items.length ? classes.empty_cart : ""
          }`}
        >
          {items.length ? (
            items.map((item, i) => (
              <CartItem item={item} key={`item_in_cart_${i}`} />
            ))
          ) : (
            <p className={classes.empty_cart_text}>
              <span>Your cart is empty</span>
              <span>
                <FaCartShopping />
              </span>
            </p>
          )}
        </section>

        <section className={classes.purchase}>
          <span>Total: ${totalPrice}</span>
          <div className={classes.purchase__btns}>
            <button onClick={handleCheckout}>Checkout</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;
