import React from "react";
import style from "../../Styles/SignIn.module.css";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <h1 className={style.heading}>Sign up or Sign in</h1>
        <p className={style.formHelpText}>
          Enjoy the convenience of a single account across all participating
          brands
        </p>
        <form>
          <div className={style.emailWrapper}>
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" placeholder="Enter your email" />
          </div>
          <div className={style.passwordWrapper}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter your password"
            />
          </div>
          <p className={style.termsAndConditionText}>
            By creating your account you agree to our
            <span>
              <a href="https://www.lifestylestores.com/in/en/termsandconditions">
                Terms and Conditions
              </a>
            </span>
          </p>
          <p>
            You don't have an account? <Link to="/signup">Register</Link>
          </p>
          <div className={style.submitButtonWrapper}>
            <button>Signin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
