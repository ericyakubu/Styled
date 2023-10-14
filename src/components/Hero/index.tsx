import React from "react";
import { Link } from "react-router-dom";

import classes from "./Hero.module.scss";
import { VideoUrl } from "../../constants";
const Hero: React.FC = () => {
  const current = Math.floor(Math.random() * 5);
  return (
    <main className={classes.container}>
      <video src={VideoUrl[current]} muted autoPlay loop></video>
      <aside className={classes.banner}>
        <h2 className={classes.banner_txt}>Fall & Winter</h2>
        <Link to={"/shop"} className={classes.banner_btn}>
          Shop Now
        </Link>
      </aside>
      <h5 className={classes.bottom}>FREE SHIPPING WORLDWIDE</h5>
    </main>
  );
};

export default Hero;
