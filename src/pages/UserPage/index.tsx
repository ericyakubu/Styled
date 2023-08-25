import React from "react";
import classes from "./UserPage.module.scss";
import UserControls from "../../components/UserControls";
import UserPurchases from "../../components/UserPurchases";

const UserPage: React.FC = () => {
  return (
    <div className={classes.container}>
      <UserControls />
      <UserPurchases />
    </div>
  );
};

export default UserPage;
