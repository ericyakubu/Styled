import React, { useEffect } from "react";
import classes from "./Landing.module.scss";
import Hero from "../../components/Hero";
import LandingOffers from "../../components/LandingOffers";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";

const Landing: React.FC = () => {
  const { products } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    // console.log(products);
  }, [products]);

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
