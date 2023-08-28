import React from "react";
import classes from "./User.module.scss";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../redux";
import { setLoginModal } from "../../../../redux/user";

const User: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const { isLoggedIn } = useSelector((state: RootState) => state.user);

  const handleOpenUser = () => {
    if (isLoggedIn) {
      navigate("/user");
    } else {
      dispatch(setLoginModal());
    }
  };

  return (
    <>
      <button className={classes.user} onClick={handleOpenUser}>
        <FaUserAlt />
      </button>
      {/* <div >
        <button>login</button>
        <button>Signup</button>
      </div> */}
    </>
  );
};

export default User;
