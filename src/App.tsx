import React, { useEffect } from "react";
import axios from "axios";
import "./styles/global.scss";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import ProductPage from "./pages/ProductPage";
import UserPage from "./pages/UserPage";
import Shop from "./pages/Shop";
// import Test from "./pages/Test";
import Payment from "./pages/Payment";
import { useDispatch, useSelector } from "react-redux";
import { getTopProducts } from "./redux/products/asyncActions";
import { getProducts } from "./redux/filter/asyncActions";
import { AppDispatch, RootState } from "./redux";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  axios.defaults.withCredentials = true;

  const filter = useSelector((state: RootState) => state.filter);

  useEffect(() => {
    //TODO fix this error
    dispatch(getTopProducts());
  }, []);

  useEffect(() => {
    dispatch(getProducts());
  }, [filter]);

  // useEffect(() => {
  // }, []);

  // const getProducts = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:3000/api/v1/products`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("error occured \n\n\n\n" + err));
  // };

  // const getMe = async () => {
  //   await axios
  //     .get(`http://127.0.0.1:3000/api/v1/users/me`)
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("error occured \n\n\n\n" + err));
  // };

  // const updateMe = async () => {
  //   await axios
  //     .patch(`http://127.0.0.1:3000/api/v1/users/updateMe`, {
  //       photo:
  //         "https://images.pexels.com/photos/162079/dolphin-sea-marine-mammals-wise-162079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  //     })
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log("error occured \n\n\n\n" + err));
  // };

  // const login = async () => {
  //   const email = "user04@gmail.com";
  //   const password = "password";

  //   await axios
  //     .post(`http://127.0.0.1:3000/api/v1/users/login`, {
  //       email,
  //       password,
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  // console.log(data);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="shop" element={<Shop />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="user" element={<UserPage />} />
        {/* <Route path="test" element={<Test />} /> */}
        <Route path="payment" element={<Payment />} />
      </Route>
    )
  );

  return (
    <>
      {/* <button onClick={login}>login</button>
      <button onClick={getProducts}>get products</button>
      <button onClick={getMe}>get me</button>
      <button onClick={updateMe}>update me</button> */}

      <RouterProvider router={router} />
    </>
  );
};

export default App;
