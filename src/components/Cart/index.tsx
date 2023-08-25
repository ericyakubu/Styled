import React, { useRef } from "react";
import classes from "./Cart.module.scss";
import { MdClose } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  decreaseQuantity,
  increaseQuantity,
  setShowCart,
} from "../../redux/cart";
import { AppDispatch, RootState } from "../../redux";
import { CartItemType } from "../../types";

const Cart: React.FC = () => {
  const { items, totalPrice } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch<AppDispatch>();
  const containerRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const shoppingRef = useRef<HTMLButtonElement>(null);
  // const productList = [];
  // const product = {
  //   img: "https://placehold.jp/150x250.png",
  //   name: "Product name",
  //   quantity: 1,
  //   price: 132.43,
  //   size: "xs",
  // };

  // for (let i = 1; i <= 20; i++) {
  //   productList.push(product);
  // }

  const closeContainerOutside = (e: React.MouseEvent<HTMLElement>): void => {
    if (e.target === containerRef.current) dispatch(setShowCart());
  };
  const closeContainer = (): void => {
    dispatch(setShowCart());
  };

  const handleIncreaseQuantity = (item: CartItemType) => {
    dispatch(increaseQuantity(item));
  };
  const handleDecreaseQuantity = (item: CartItemType) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <div
      className={classes.container}
      ref={containerRef}
      onClick={closeContainerOutside}
    >
      <div className={classes.cart_main}>
        <section className={classes.options}>
          <button ref={closeRef} onClick={closeContainer}>
            <MdClose />
          </button>
        </section>

        <section className={classes.list}>
          {items.map((item, i) => (
            <div className={classes.item} key={`item_in_cart_${i}`}>
              <img
                src={item.imageCover}
                alt={item.name}
                className={classes.item_img}
              />
              <div className={classes.item_details}>
                <h4 className={classes.item_name}>{item.name}</h4>
                <h5 className={classes.item_price}>${item.price}</h5>
                <h5 className={classes.item_size}>
                  Size: <span>{item.size}</span>
                </h5>
              </div>

              <div className={classes.item_quantity}>
                Quantity{" "}
                <div className={classes.item_quantity_controls}>
                  <button onClick={() => handleDecreaseQuantity(item)}>
                    -
                  </button>
                  {item.quantity}
                  <button onClick={() => handleIncreaseQuantity(item)}>
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={classes.purchase}>
          <button>Go to checkout</button>
          <button ref={shoppingRef} onClick={closeContainer}>
            Keep shopping
          </button>
          <span>{totalPrice}</span>
        </section>
      </div>
    </div>
  );
};

export default Cart;
