import React from "react";
import classes from "./LinksHead.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setFilterSale } from "../../../redux/filter";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { setOpenMenu } from "../../../redux/menu";

const LinksHead: React.FC = () => {
  const { onSale } = useSelector((state: RootState) => state.filter);
  const dispatch = useAppDispatch();

  const handleCloseMenu = () => {
    dispatch(setOpenMenu(false));
  };

  const handleSale = (onSale: boolean) => {
    dispatch(setFilterSale(onSale));
    handleCloseMenu();
  };
  return (
    <nav className={classes.links}>
      <NavLink
        onClick={handleCloseMenu}
        to={"/"}
        className={({ isActive, isPending }) =>
          isPending ? classes.pending : isActive ? classes.active : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to={"/shop"}
        onClick={() => handleSale(false)}
        className={({ isActive, isPending }) =>
          isPending
            ? classes.pending
            : isActive && !onSale
            ? classes.active
            : ""
        }
      >
        Shop
      </NavLink>
      <NavLink
        to={"/shop"}
        onClick={() => handleSale(true)}
        className={({ isPending }) =>
          isPending ? classes.pending : onSale ? classes.active : ""
        }
      >
        Sale
      </NavLink>
    </nav>
  );
};

export default LinksHead;
