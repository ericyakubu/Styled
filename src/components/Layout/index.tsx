import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Cart from "../Cart";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import Pagination from "../Pagination";
import UserModals from "../UserModals";
import Menu from "../Menu";

const Layout: React.FC = () => {
  const location = useLocation();

  const { showCart } = useSelector((state: RootState) => state.cart);
  const { userModals } = useSelector((state: RootState) => state.user);
  const { openMenu } = useSelector((state: RootState) => state.menu);
  return (
    <>
      <Header />
      {showCart && <Cart />}
      <main>
        <Outlet />
      </main>
      {userModals ? <UserModals /> : null}
      {location.pathname === "/shop" ? <Pagination /> : null}
      {openMenu ? <Menu /> : null}
      <Footer />
    </>
  );
};

export default Layout;
