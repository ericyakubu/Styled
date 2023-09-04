import React from "react";
import classes from "./UserPurchases.module.scss";
import { Purchases } from "../../constants";

const UserPurchases: React.FC = () => {
  return (
    <div className={classes.container}>
      <table>
        <tr>
          <th>Products</th>
          <th>Purchase Date</th>
          <th>Price</th>
          <th>Est. delivery</th>
        </tr>
        {Purchases.map((purchase, i) => (
          <tr className={classes.purchase} key={`purchase_${i}`}>
            <td>{purchase.products}</td>
            <td>{purchase.purchaseDate}</td>
            <td>{purchase.price}</td>
            <td>{purchase.estDelivery}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default UserPurchases;
