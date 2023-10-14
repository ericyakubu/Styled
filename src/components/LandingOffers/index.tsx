import React from "react";
import classes from "./LandingOffers.module.scss";
import LandingOffer from "./LandingOffer";
import { RootState } from "../../redux";
import { useSelector } from "react-redux";
import { LandingSaleLinkType, ProductsType } from "../../types";
import { SALE_OFFER_IMG } from "../../constants";

const LandingOffers: React.FC = () => {
  const { topProducts } = useSelector((state: RootState) => state.products);
  const newProduct: LandingSaleLinkType = {
    name: "sale",
    link: "shop",
    imageCover: SALE_OFFER_IMG,
  };
  const newProds: (ProductsType | LandingSaleLinkType)[] = [...topProducts];
  newProds.splice(1, 0, newProduct);

  return (
    <>
      {topProducts && (
        <div className={classes.container}>
          {newProds.map((product, index) => (
            <LandingOffer
              product={product}
              index={index}
              key={`offer_key_${index}`}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default LandingOffers;
