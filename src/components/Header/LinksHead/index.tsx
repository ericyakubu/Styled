import React from "react";
import classes from "./LinksHead.module.scss";
import { NavLink } from "react-router-dom";

const LinksHead: React.FC = () => {
  //TODO add navigation
  return (
    <section className={classes.links}>
      <NavLink
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? classes.pending : isActive ? classes.active : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/shop"}
        className={({ isActive, isPending }) =>
          isPending ? classes.pending : isActive ? classes.active : ""
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/sale"}
        className={({ isActive, isPending }) =>
          isPending ? classes.pending : isActive ? classes.active : ""
        }
      >
        Sale
      </NavLink>
    </section>
  );
};

export default LinksHead;
