import React, { useRef, useState } from "react";
import classes from "./UserLogin.module.scss";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../redux";
import { setLoginForm, setLoginModal } from "../../../redux/user";
import { UserModalOpts, ValidationErrs } from "../../../constants";

const LoginModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>(
    ValidationErrs.email.noEntry
  );
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passErrorMsg, setPassErrorMsg] = useState<string>(
    ValidationErrs.password.noEntry
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === containerRef.current) dispatch(setLoginModal());
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const validateLogin = () => {
    //check if email was entered
    const emailCheck = emailRef.current && emailRef.current.value;
    if (!emailCheck)
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.noEntry)
      );
    //check if password was entered
    const passCheck = passRef.current && passRef.current.value;
    if (!passCheck)
      return (
        setPasswordError(true), setPassErrorMsg(ValidationErrs.password.noEntry)
      );
    //check if email entered is valid
    if (validateEmail(emailRef.current.value))
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.badEntry)
      );
    //check if password entered is valid
    if (passRef.current.value.length < 8)
      return (
        setPasswordError(true),
        setPassErrorMsg(ValidationErrs.password.badEntry)
      );
  };

  const handleSignUp = () => {
    return dispatch(setLoginForm(UserModalOpts.SIGNUP));
  };

  const handleForgot = () => {
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
          <h4>Login</h4>
          <label htmlFor="email_login">Email:</label>
          <input
            className={classes.input}
            type="email"
            name=""
            id="email_login"
            ref={emailRef}
          />
          {emailError ? <p>{emailErrorMsg}</p> : null}
          <label htmlFor="pass_login">Password:</label>
          <input
            className={classes.input}
            type="password"
            name=""
            id="pass_login"
            ref={passRef}
          />
          {passwordError ? <p>{passErrorMsg}</p> : null}

          <section className={classes.controls}>
            <button className={classes.forgot_pas} onClick={handleForgot}>
              Forgot password?
            </button>
            <button className={classes.sign_up} onClick={handleSignUp}>
              Sign Up
            </button>
            <button className={classes.login} onClick={validateLogin}>
              Login
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
