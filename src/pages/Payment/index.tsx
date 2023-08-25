import React, { useEffect } from "react";
import { useAppDispatch } from "../../redux/hooks";
import { removeOldProduct } from "../../redux/products";

const Payment = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(removeOldProduct());
  });
  return <div>Payment</div>;
};

export default Payment;
