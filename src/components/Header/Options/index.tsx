import React from "react";
import classes from "./Options.module.scss";
import Search from "./Search";
import Cart from "./Cart";
import { RxHamburgerMenu } from "react-icons/rx";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux";
import { useAppDispatch } from "../../../redux/hooks";
import { setOpenMenu } from "../../../redux/menu";

import { MdClose } from "react-icons/md";

const Options: React.FC = () => {
  const { openMenu } = useSelector((state: RootState) => state.menu);
  const dispatch = useAppDispatch();
  const handleToggleMenu = () => {
    dispatch(setOpenMenu(!openMenu));
  };

  return (
    <section>
      <div className={classes.options}>
        <Search />
        <Cart />
      </div>
      <button className={classes.burger} onClick={handleToggleMenu}>
        {openMenu ? <MdClose /> : <RxHamburgerMenu />}
      </button>
    </section>
  );
};

export default Options;
