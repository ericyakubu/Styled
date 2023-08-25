import React, { useRef } from "react";
import { Link } from "react-router-dom";

import classes from "./Hero.module.scss";
import { VideoUrl } from "../../constants";
const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const current = Math.floor(Math.random() * 5);

  //TODO make videos go i sequel
  return (
    <section className={classes.container}>
      <video
        src={VideoUrl[current]}
        muted
        autoPlay
        loop
        // onEnded={handleVideoEnd}
        ref={videoRef}
      ></video>
      <div className={classes.banner}>
        <span className={classes.banner_txt}>Fall & Winter</span>
        <Link to={"/shop"} className={classes.banner_btn}>
          Shop Now
        </Link>
      </div>
      <div className={classes.bottom}>FREE SHIPPING WORLDWIDE</div>
    </section>
  );
};

export default Hero;
