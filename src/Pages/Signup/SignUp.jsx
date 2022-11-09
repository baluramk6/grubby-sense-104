import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../../Context/UserAuthContext";
import style from "../../Styles/SignUp.module.css";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { signUp } = useUserAuth();
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signUp(email, password);
      navigate("/signin");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.formWrapper}>
          <h1 className={style.heading}>Sign up or Sign in</h1>
          <p className={style.formHelpText}>
            Enjoy the convenience of a single account across all participating
            brands
          </p>
          <form onSubmit={handleSubmit}>
            <div className={style.emailWrapper}>
              <label htmlFor="">Email</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="Enter your email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={style.passwordWrapper}>
              <label htmlFor="">Password</label>
              <input
                type="password"
                name=""
                id=""
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
              You do have an account? <Link to="/signin">Login</Link>
            </p>
            <div className={style.submitButtonWrapper}>
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
