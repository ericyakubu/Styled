import React, { useEffect } from "react";
import classes from "./UserPage.module.scss";
import UserControls from "../../components/UserControls";
import UserPurchases from "../../components/UserPurchases";
import { useAppDispatch } from "../../redux/hooks";
import { removeOldProduct } from "../../redux/products";

const UserPage: React.FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(removeOldProduct());
  }, []);
  return (
    <div className={classes.container}>
      <UserControls />
      <UserPurchases />
    </div>
  );
};

export default UserPage;
