import React, { useState, useEffect } from "react";
import style from "../../Styles/SignIn.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import { async } from "@firebase/util";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signIn, googleSignIn } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={style.formContainer}>
      <div className={style.formWrapper}>
        <h1 className={style.heading}>Sign in</h1>
        <p className={style.formHelpText}>
          Enjoy the convenience of a single account across all participating
          brands
        </p>
        <form onSubmit={handleSubmit}>
          <div className={style.emailWrapper}>
            <label htmlFor="">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={style.passwordWrapper}>
            <label htmlFor="">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <span className={style.errorMessage}>{error}</span>}
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
            <button onClick={handleGoogleSignIn}>Signin with google</button>
            <button type="submit">Signin</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
