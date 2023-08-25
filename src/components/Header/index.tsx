import React from "react";
import Options from "./Options";
import LinksHead from "./LinksHead";
import classes from "./Header.module.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <Link to={"/"} className={classes.logo}>
        Styled
      </Link>
      <LinksHead />
      <Options />
    </header>
  );
};

export default Header;
