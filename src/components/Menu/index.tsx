import React from "react";
import classes from "./Menu.module.scss";
import Search from "../Header/Options/Search";
import Cart from "../Header/Options/Cart";
import LinksHead from "../Header/LinksHead";

const Menu: React.FC = () => {
  return (
    <div className={classes.container}>
      <section className={classes.search}>
        <Search />
      </section>
      <section className={classes.cart}>
        <Cart />
      </section>
      <nav>
        <LinksHead />
      </nav>
    </div>
  );
};

export default Menu;
