import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import SuccessModal from "../../Components/SuccessModal/SuccessModal";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [invalidCredentials, setInvalidCredentials] = useState(false);
  const [show, setShow] = useState(false);

  const API_URL = process.env.REACT_APP_API_URL;
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
      setEmail(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const validateForm = () => {
    // Variable to check if form is valid
    let isFormValid = true;

    // Check email
    // Use a regex expression to check for a valid email:
    // Must have 1 or more alphanumeric characters (allows for a dot or hyphen as well) before an @ sign
    // Must then 1 or more alphanumeric characters before (not allowing for a dot or hyphen) before a .
    // Must be followed by a domain which only has letters and is between 2-10 characters long
    const emailRegexValidation =
      /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/;
    if (!email.match(emailRegexValidation)) {
      setValidEmail("error");
      isFormValid = false;
    } else {
      setValidEmail(true);
    }

    // Check password
    if (!password) {
      setValidPassword("error");
      isFormValid = false;
    } else {
      setValidPassword(true);
    }

    // Check that every field is valid
    return isFormValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInvalidCredentials(false); // Clear the invalid credentials error message on every form submission attempt, if the information is invalid again, the catch statement will handle it
    if (validateForm()) {
      axios
        .post(`${API_URL}/users/login`, {
          email,
          password,
        })
        .then((response) => {
          if (response.status === 200) {
            setShow(true); // Show success popup
            sessionStorage.setItem("authToken", response.data.token); // Set session to have JWT token so user can start using the site
            setTimeout(() => {
              navigate("/dashboard"); // Take user to their dashboard after successful login
              setShow(false); // Hide the success modal so it isn't showing if a user returns to the page
            }, 2000);
          }
        })
        .catch((error) => {
          if (error.response.data.error === "Invalid login credentials") {
            setInvalidCredentials(true);
          }
          return <h2>{error.message}</h2>;
        });
    }
  };

  return (
    <main className="login-page">
      <section className="login-form-container">
        <h2 className="login-form-container__title">SIGN IN</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="email">
              Email
            </label>
            <input
              className={`login-form__input ${
                validEmail === "error" ? "login-form__input--error" : ""
              }`}
              type="text"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={email}
              onChange={handleChangeEmail}
            ></input>
            <div
              className={`login-form-error ${
                validEmail === "error" ? "login-form-error--show" : ""
              }`}
            >
              <h3 className="login-form-error__message">
                {`${
                  email &&
                  !email.match(
                    /^([a-zA-Z\d.-]+)@([a-zA-Z\d]+)\.([a-zA-z]{2,10})$/
                  )
                    ? "Please enter a valid email"
                    : !email
                    ? "This field is required"
                    : ""
                }`}
              </h3>
            </div>
            <div
              className={`register-form-error ${
                invalidCredentials ? "register-form-error--show" : ""
              }`}
            >
              <h3 className="register-form-error__message">
                Invalid login credentials
              </h3>
            </div>
          </div>
          <div className="login-form__input-group">
            <label className="login-form__label" htmlFor="password">
              Password
            </label>
            <input
              className={`login-form__input ${
                validPassword === "error" ? "login-form__input--error" : ""
              }`}
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={handleChangePassword}
            ></input>
            <div
              className={`login-form-error ${
                validPassword === "error" ? "login-form-error--show" : ""
              }`}
            >
              <h3 className="login-form-error__message">
                {`${!password ? "This field is required" : ""}`}
              </h3>
            </div>
            <div
              className={`register-form-error ${
                invalidCredentials ? "register-form-error--show" : ""
              }`}
            >
              <h3 className="register-form-error__message">
                Invalid login credentials
              </h3>
            </div>
          </div>
          <button className="login-form__button">Login</button>
        </form>
        <h3 className="login-form-container__subtext">
          New to Portfolio Sphere?{" "}
          <Link to="/register" className="login-form-container__subtext-link">
            <span className="login-form-container__subtext--special">
              Sign up
            </span>
          </Link>
        </h3>
      </section>
      <SuccessModal show={show} titleText={"Welcome back!"} bodyText={"Taking you to your dashboard..."}/>
    </main>
  );
}

export default Login;
