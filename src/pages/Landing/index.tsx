import React, { useEffect } from "react";
import classes from "./Landing.module.scss";
import Hero from "../../components/Hero";

import LandingOffers from "../../components/LandingOffers";

import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { useAppDispatch } from "../../redux/hooks";
import { removeOldProduct } from "../../redux/products";

const Landing: React.FC = () => {
  const dispatch = useAppDispatch();
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(removeOldProduct());
  }, []);

  useEffect(() => {}, [products]);

  return (
    <>
      <Hero />
      <div className={classes.container}>
        <h2>YEAR ROUND</h2>
        <h3>Must Have Items</h3>
      </div>
      <LandingOffers />
    </>
  );
};

export default Landing;
