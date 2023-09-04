import React from "react";
import classes from "./Options.module.scss";
import Search from "./Search";
// import User from "./User";
import Cart from "./Cart";

const Options: React.FC = () => {
  //TODO add options
  return (
    <div className={classes.options}>
      <Search />
      {/* //TODO fix user  */}
      {/* <User /> */}
      <Cart />
    </div>
  );
};

export default Options;
