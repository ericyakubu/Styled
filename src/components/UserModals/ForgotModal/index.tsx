import React, { useRef, useState } from "react";
import classes from "./ForgotModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { setLoginForm, setLoginModal } from "../../../redux/user";
import { UserModalOpts, ValidationErrs } from "../../../constants";

const ForgotModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginForm } = useSelector((state: RootState) => state.user);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>(
    ValidationErrs.email.noEntry
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === containerRef.current) dispatch(setLoginModal());
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validateForm = () => {
    if (loginForm !== UserModalOpts.LOGIN)
      return dispatch(setLoginForm(UserModalOpts.LOGIN));

    //check if email was entered
    const emailCheck = emailRef.current && emailRef.current.value;
    if (!emailCheck)
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.noEntry)
      );

    //check if email entered is valid
    if (validateEmail(emailRef.current.value))
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.badEntry)
      );
  };

  const validateSignUp = () => {
    if (loginForm !== UserModalOpts.SIGNUP)
      return dispatch(setLoginForm(UserModalOpts.SIGNUP));
  };

  const validateForgot = () => {
    if (loginForm !== UserModalOpts.FORGOT)
      return dispatch(setLoginForm(UserModalOpts.FORGOT));
  };

  return (
    <div
      ref={containerRef}
      className={classes.container}
      onClick={handleClickOutside}
    >
      <div className={classes.modal}>
        <div className={classes.main}>
          <h4>Forgot you password?</h4>
          <label htmlFor="email_login">Enter your email:</label>
          <input
            className={classes.input}
            type="email"
            name=""
            id="email_login"
            ref={emailRef}
          />
          {emailError ? <p>{emailErrorMsg}</p> : null}

          <section className={classes.controls}>
            <button className={classes.forgot_pas} onClick={validateForgot}>
              Forgot password?
            </button>
            <button className={classes.sign_up} onClick={validateSignUp}>
              Sign Up
            </button>
            <button className={classes.login} onClick={validateForm}>
              Login
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ForgotModal;
