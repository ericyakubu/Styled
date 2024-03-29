import React, { useState, useEffect } from "react";
import classes from "./ProductPage.module.scss";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/products/asyncActions";
import { useParams } from "react-router-dom";
import { AppDispatch, RootState } from "../../redux";
import { CartItemType } from "../../types";
import { addToCart } from "../../redux/cart";
import { Sizes, SizesShoes } from "../../constants";
import { immediateCheckout } from "../../redux/cart/asyncActions";
import { toast } from "react-toastify";

const ProductPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { product } = useSelector((state: RootState) => state.products);
  const { items } = useSelector((state: RootState) => state.cart);
  const [finalPrice, setFinalPrice] = useState<number>(0);
  const [priceOriginal, setPriceOriginal] = useState<number>(0);
  const [sizesAvailable, setSizesAvailable] = useState<(string | number)[]>([]);
  const [sizesChosen, setSizesChosen] = useState<(string | number)[]>([]);
  const [cart, setCart] = useState<CartItemType[]>([]);
  const [stars, setStars] = useState<string[]>([]);
  const [chozenImg, setChosenImg] = useState<number>(0);

  let newCartItem: CartItemType;
  let discount;

  const images: string[] = product
    ? [product.imageCover, ...product.images]
    : [""];

  const { id } = useParams();

  if (product)
    discount = product.discount
      ? product.discount
      : product.priceDiscount
      ? Math.ceil((product.priceDiscount / product.price) * 100)
      : null;

  if (product)
    newCartItem = {
      id: product.id,
      imageCover: product.imageCover,
      name: product.name,
      price: finalPrice,
      quantity: 1,
    };

  const handleAddToCartHolder = (size: string | number) => {
    if (!product) return;

    newCartItem.size = size;

    const find = cart.find((item) => item.size === newCartItem.size);

    if (find) {
      const filtered = cart.filter((item) => item.size !== find.size);
      const filteredSizes = sizesChosen.filter((size) => size !== find.size);
      setCart(filtered);
      setSizesChosen(filteredSizes);
    } else {
      setCart((prev) => [...prev, newCartItem]);
      setSizesChosen((prev) => [
        ...prev,
        newCartItem.size ? newCartItem.size : "",
      ]);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;
    toast.success("Added to your cart!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    product.sizes.length || product.sizesShoes.length
      ? dispatch(addToCart(cart))
      : dispatch(addToCart([newCartItem]));
  };

  const handleChangeImg = (index: number) => {
    setChosenImg(index);
  };

  const handleImmediateCheckout = () => {
    if (!product) return;
    if (items.length === 0) return dispatch(immediateCheckout([newCartItem]));

    const checkoutItems: CartItemType[] = [...items, newCartItem];
    const oldItems: CartItemType[] = [...items];

    const found: CartItemType | undefined = oldItems.find(
      (oldItem) =>
        oldItem.id === newCartItem.id && oldItem.size === newCartItem.size
    );

    if (found) {
      const index = oldItems.indexOf(found);
      const newItem = { ...found };
      newItem.quantity++;
      oldItems.splice(index, 1, newItem);
      dispatch(immediateCheckout(oldItems));
    } else {
      dispatch(immediateCheckout(checkoutItems));
    }
  };

  useEffect(() => {
    if (id) dispatch(getProduct(id));
  }, [id]);

  useEffect(() => {
    if (product) {
      const total = 5;
      let full;
      let empty;
      let half = product.ratingsAverage % 1;
      let finalPrice: number = 0;

      const starsArr = [];
      if (half !== 0) {
        full = (product.ratingsAverage - half) / 1;
        half = 1;
        empty = total - full - half;

        for (let i = 1; i <= full; i++) {
          starsArr.push("full");
        }
        starsArr.push("half");
        for (let i = 1; i <= empty; i++) {
          starsArr.push("empty");
        }
      } else {
        full = product.ratingsAverage;
        empty = total - full;
        for (let i = 1; i <= full; i++) {
          starsArr.push("full");
        }
        for (let i = 1; i <= empty; i++) {
          starsArr.push("empty");
        }
      }
      setStars(starsArr);

      if (product.sizes.length) setSizesAvailable(product.sizes);
      if (product.sizesShoes.length) setSizesAvailable(product.sizesShoes);
      if (product.discount)
        finalPrice = product.price - product.price * (product.discount / 100);
      if (product.priceDiscount)
        finalPrice = product.price - product.priceDiscount;

      if (product.discount || product.priceDiscount) {
        setPriceOriginal(Number(product.price.toFixed(2)));
        setFinalPrice(Number(finalPrice.toFixed(2)));
      } else {
        setPriceOriginal(Number(product.price.toFixed(2)));
        setFinalPrice(Number(product.price.toFixed(2)));
      }
    }
  }, [product]);

  return (
    <div className={classes.container}>
      {product && (
        <>
          <div className={classes.img_container}>
            {images ? (
              <>
                <img
                  src={images[chozenImg]}
                  alt={product.name}
                  className={classes.img_main}
                />

                {images.length >= 2 ? (
                  <>
                    <div className={classes.imgs}>
                      {images.map((img, i) => (
                        <img
                          src={img}
                          alt=""
                          onClick={() => handleChangeImg(i)}
                          className={classes.img}
                          key={`img_${i}`}
                        />
                      ))}
                    </div>
                  </>
                ) : null}
              </>
            ) : null}
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
              {product.discount || product.priceDiscount ? (
                <>
                  <div className={classes.price_discount}>
                    <div className={classes.original}>Was: {priceOriginal}</div>
                    <span className={classes.percentage}>-{discount}%</span>
                  </div>
                </>
              ) : null}
            </div>

            <p className={classes.description}>{product.description}</p>

            {product.sizes.length || product.sizesShoes.length ? (
              <div className={classes.sizes_container}>
                <p>Sizes: </p>
                <div className={classes.sizes}>
                  {product.sizes.length
                    ? Sizes.map((sizeCheck, i) => (
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
                      ))
                    : SizesShoes.map((sizeCheck, i) => (
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
            ) : null}

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
