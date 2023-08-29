import React from "react";
import classes from "./LinksHead.module.scss";
import { NavLink } from "react-router-dom";
import { useAppDispatch } from "../../../redux/hooks";
import { setFilterSale } from "../../../redux/filter";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";

const LinksHead: React.FC = () => {
  // const location = useLocation();
  // console.log(location);

  // const [test , setTest] = useState('')

  const { onSale } = useSelector((state: RootState) => state.filter);

  const dispatch = useAppDispatch();
  const handleSale = (onSale: boolean) => {
    dispatch(setFilterSale(onSale));
  };
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
    </section>
  );
};

export default LinksHead;
