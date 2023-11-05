import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./styles/global.scss";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import Shop from "./pages/Shop";
import Payment from "./pages/Payment";

import { getTopProducts } from "./redux/products/asyncActions";
import { getProducts } from "./redux/filter/asyncActions";
import { AppDispatch, RootState } from "./redux";
import { removeOldProducts } from "./redux/products";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  axios.defaults.withCredentials = true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { showMore, ...filterWithourShowMore } = useSelector(
    (state: RootState) => state.filter
  );

  useEffect(() => {
    //TODO fix this error
    dispatch(getTopProducts());
  }, []);

  useEffect(() => {
    dispatch(removeOldProducts());
    dispatch(getProducts());
  }, [filterWithourShowMore]);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="payment" element={<Payment />} />
        <Route path="*" element={<Landing />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
