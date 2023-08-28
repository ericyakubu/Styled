import React, { useState, useEffect } from "react";
import classes from "./ProductPage.module.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/products/asyncActions";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux";
import { CartItemType } from "../../types";
import { addToCart } from "../../redux/cart";
import { Sizes } from "../../constants";
import { immediateCheckout } from "../../redux/cart/asyncActions";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.products);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [priceOriginal, setPriceOriginal] = useState<number>(0);
  const [sizesAvailable, setSizesAvailable] = useState<string[]>([]);
  const [sizesChosen, setSizesChosen] = useState<string[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);

  const [stars, setStars] = useState<string[]>([]);

  const { id } = useParams();

  const handleAddToCartHolder = (size: string) => {
    if (!product) return;
    const newCartItem: CartItemType = {
      id: product.id,
      imageCover: product.imageCover,
      name: product.name,
      price: finalPrice,
      quantity: 1,
      size,
    };

    const find = cart.find((item) => item.size === newCartItem.size);

    if (find) {
      const filtered = cart.filter((item) => item.size !== find.size);
      const filteredSizes = sizesChosen.filter((size) => size !== find.size);
      setCart(filtered);
      setSizesChosen(filteredSizes);
    } else {
      setCart((prev) => [...prev, newCartItem]);
      setSizesChosen((prev) => [...prev, newCartItem.size]);
    }
  };

  const handleAddToCart = () => {
    dispatch(addToCart(cart));
  };

  const handleImmediateCheckout = () => {
    if (!product) return;
    const checkoutItems = [...cart];
    dispatch(immediateCheckout(checkoutItems));
  };

  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [id]);

  useEffect(() => {
    if (product) {
      //TODO needs refactoring
      const total = 5;
      let full;
      let empty;
      let half = product.ratingsAverage % 1;

      const test = [];
      if (half !== 0) {
        full = (product.ratingsAverage - half) / 1;
        half = 1;
        empty = total - full - half;

        for (let i = 1; i <= full; i++) {
          test.push("full");
        }
        test.push("half");
        for (let i = 1; i <= empty; i++) {
          test.push("empty");
        }
      } else {
        full = product.ratingsAverage;
        empty = total - full;
        for (let i = 1; i <= full; i++) {
          test.push("full");
        }
        for (let i = 1; i <= empty; i++) {
          test.push("empty");
        }
      }
      setStars(test);

      setSizesAvailable(product.sizes);
      if (product.discount) {
        const finalPrice: number =
          product.price - product.price * (product.discount / 100);

        setPriceOriginal(Number(product.price.toFixed(2)));
        setFinalPrice(Number(finalPrice.toFixed(2)));
      } else {
        setPriceOriginal(Number(product.price.toFixed(2)));
        setFinalPrice(Number(product.price.toFixed(2)));
      }
    }
  }, [product]);

  //TODO add loading circle
  return (
    <div className={classes.container}>
      {product && (
        <>
          <div className={classes.img_container}>
            <img
              src={product.imageCover}
              alt={product.name}
              className={classes.img_main}
            />

            <div className={classes.imgs}>
              {product.images.map((img, i) => (
                <img
                  src={img}
                  alt=""
                  className={classes.img}
                  key={`img_${i}`}
                />
              ))}
            </div>
          </div>
          <div className={classes.product_info}>
            <div className={classes.name}>
              <h2>{product.name}</h2>
              <div className={classes.rating}>
                <span className={classes.rating_num}>
                  {product.ratingsAverage}
                </span>
                <span className={classes.rating_stars}>
                  {stars.map((star, i) => (
                    <span
                      className={classes.rating_star}
                      key={`star_rating_${i}`}
                    >
                      {star === "full" ? (
                        <BsStarFill />
                      ) : star === "half" ? (
                        <BsStarHalf />
                      ) : (
                        <BsStar />
                      )}
                    </span>
                  ))}
                </span>

                <span className={classes.rating_amount}>
                  {product.ratingsQuantity} ratings
                </span>
              </div>
            </div>

            <div className={classes.price}>
              Price: <span className={classes.price_num}>${finalPrice}</span>{" "}
              {product.discount ? (
                <>
                  <div className={classes.price_discount}>
                    <div className={classes.original}>
                      List Price: {priceOriginal}
                    </div>
                    <span className={classes.percentage}>
                      -{product.discount}%
                    </span>
                  </div>
                </>
              ) : null}
            </div>

            <div className={classes.description}>{product.description}</div>

            <div className={classes.sizes_container}>
              <p>Sizes: </p>
              <div className={classes.sizes}>
                {Sizes.map((sizeCheck, i) => (
                  <button
                    className={` ${
                      sizesAvailable.includes(sizeCheck)
                        ? classes.size_available
                        : classes.size_unavailable
                    } ${
                      sizesChosen.includes(sizeCheck)
                        ? classes.size_selected
                        : ""
                    }`}
                    onClick={() => handleAddToCartHolder(sizeCheck)}
                    key={`size_key_${i}`}
                  >
                    {sizeCheck}
                  </button>
                ))}
              </div>
            </div>

            <div className={classes.btns}>
              <button onClick={handleAddToCart}>
                Add to Cart {cart.length >= 1 ? <>({cart.length})</> : null}
              </button>
              <button onClick={handleImmediateCheckout}>Buy Now</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductPage;
