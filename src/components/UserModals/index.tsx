import React from "react";
import LoginModal from "./LoginModal";
import ForgotModal from "./ForgotModal";
import SignUpModal from "./SignUpModal";
import { useSelector } from "react-redux";
import { RootState } from "../../redux";
import { UserModalOpts } from "../../constants";

const UserModals: React.FC = () => {
  const { loginForm } = useSelector((state: RootState) => state.user);

  return (
    <div>
      {loginForm === UserModalOpts.LOGIN ? (
        <LoginModal />
      ) : loginForm === UserModalOpts.SIGNUP ? (
        <SignUpModal />
      ) : (
        <ForgotModal />
      )}
    </div>
  );
};

export default UserModals;
