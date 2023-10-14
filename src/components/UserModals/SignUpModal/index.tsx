import React, { useRef, useState } from "react";
import classes from "./SignUpModal.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux";
import { setLoginForm, setLoginModal } from "../../../redux/user";
import { UserModalOpts, ValidationErrs } from "../../../constants";

const SignUpModal: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loginForm } = useSelector((state: RootState) => state.user);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [emailErrorMsg, setEmailErrorMsg] = useState<string>(
    ValidationErrs.email.noEntry
  );
  const [passwordError, setPasswordError] = useState<boolean>(false);
  const [passErrorMsg, setPassErrorMsg] = useState<string>(
    ValidationErrs.password.noEntry
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const emailLogRef = useRef<HTMLInputElement>(null);
  const passLogRef = useRef<HTMLInputElement>(null);

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target === containerRef.current) dispatch(setLoginModal());
  };

  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  const handleLogin = () => {
    return dispatch(setLoginForm(UserModalOpts.LOGIN));
  };

  const validateSignUp = () => {
    if (loginForm !== UserModalOpts.LOGIN)
      return dispatch(setLoginForm(UserModalOpts.LOGIN));

    //check if email was entered
    const emailCheck = emailLogRef.current && emailLogRef.current.value;
    if (!emailCheck)
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.noEntry)
      );
    //check if password was entered
    const passCheck = passLogRef.current && passLogRef.current.value;
    if (!passCheck)
      return (
        setPasswordError(true), setPassErrorMsg(ValidationErrs.password.noEntry)
      );
    //check if email entered is valid
    if (validateEmail(emailLogRef.current.value))
      return (
        setEmailError(true), setEmailErrorMsg(ValidationErrs.email.badEntry)
      );
    //check if password entered is valid
    if (passLogRef.current.value.length < 8)
      return (
        setPasswordError(true),
        setPassErrorMsg(ValidationErrs.password.badEntry)
      );
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
          <label htmlFor="email_signup">Email:</label>
          <input
            className={classes.input}
            type="email"
            name=""
            id="email_signup"
            ref={emailLogRef}
          />
          {emailError ? <p>{emailErrorMsg}</p> : null}
          <label htmlFor="pass_signup">Password:</label>
          <input
            className={classes.input}
            type="password"
            name=""
            id="pass_signup"
            ref={passLogRef}
          />
          {passwordError ? <p>{passErrorMsg}</p> : null}
          <label htmlFor="pass_signup_confirm">Confirm password:</label>
          <input
            className={classes.input}
            type="password"
            name=""
            id="pass_signup_confirm"
            ref={passLogRef}
          />
          {passwordError ? <p>{passErrorMsg}</p> : null}

          <section className={classes.controls}>
            <button className={classes.forgot_pas} onClick={handleForgot}>
              Forgot password?
            </button>
            <button className={classes.sign_up} onClick={validateSignUp}>
              Sign Up
            </button>
            <button className={classes.login} onClick={handleLogin}>
              Login
            </button>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
